/*
 * MOBILE + TRANSLATION QA
 * =======================
 * Drives a real Chromium at phone and tablet widths, in English and Spanish,
 * and fails on the things that actually break a site on a phone:
 *
 *   - horizontal overflow (the #1 cause of "it looks weird on my phone")
 *   - tap targets under 44x44 (WCAG 2.5.5 / Apple HIG)
 *   - text clipped by a fixed-height container
 *   - raw translation keys or empty strings rendered as visible copy
 *   - i18n console warnings from LanguageContext
 *   - images without alt text
 *
 * Spanish is checked at every width because Spanish strings run ~20-30%
 * longer than English — the layout that fits in English is the one most
 * likely to break in Spanish.
 */
import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const BASE = process.env.QA_BASE || 'http://localhost:4173';
const OUT = 'qa-screens';
mkdirSync(OUT, { recursive: true });

const DEVICES = [
  { name: 'iphone-se',      w: 375,  h: 667,  dpr: 2, kind: 'phone',  shot: true },
  { name: 'iphone-14',      w: 390,  h: 844,  dpr: 3, kind: 'phone',  shot: true },
  { name: 'iphone-max',     w: 430,  h: 932,  dpr: 3, kind: 'phone',  shot: false },
  { name: 'pixel-7',        w: 412,  h: 915,  dpr: 2.6, kind: 'phone', shot: false },
  { name: 'ipad-mini',      w: 768,  h: 1024, dpr: 2, kind: 'tablet', shot: true },
  { name: 'ipad-air',       w: 820,  h: 1180, dpr: 2, kind: 'tablet', shot: false },
  { name: 'ipad-pro',       w: 1024, h: 1366, dpr: 2, kind: 'tablet', shot: true },
  { name: 'ipad-landscape', w: 1024, h: 768,  dpr: 2, kind: 'tablet', shot: false },
];

const ROUTES = [
  { path: '#/',              id: 'home' },
  { path: '#/team',          id: 'team' },
  { path: '#/services',      id: 'services' },
  { path: '#/services/tele', id: 'service-tele' },
  { path: '#/faq',           id: 'faq' },
  { path: '#/privacy',       id: 'privacy' },
  { path: '#/terms',         id: 'terms' },
];

const LANGS = ['en', 'es'];
const issues = [];
const add = (sev, ctx, msg) => issues.push({ sev, ctx, msg });

// The sandbox ships a prebuilt Chromium; use it rather than downloading one.
const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});

for (const dev of DEVICES) {
  for (const lang of LANGS) {
    const ctx = await browser.newContext({
      viewport: { width: dev.w, height: dev.h },
      deviceScaleFactor: dev.dpr,
      isMobile: dev.kind === 'phone',
      hasTouch: true,
      locale: lang === 'es' ? 'es-US' : 'en-US',
    });
    // Seed the language the same way the toggle does
    await ctx.addInitScript((l) => {
      try { window.localStorage.setItem('sffc-lang', l); } catch { /* storage disabled */ }
    }, lang);

    const page = await ctx.newPage();
    const consoleIssues = [];
    // Third-party assets we do not control, and which the site is designed to
    // survive losing (fonts fall back to the system stack, icons are inline).
    const EXTERNAL = /fonts\.googleapis\.com|fonts\.gstatic\.com|favicon|site\.webmanifest/;

    page.on('console', (m) => {
      const txt = m.text();
      if (/\[i18n\]/.test(txt)) consoleIssues.push(txt);
      // Chromium logs resource failures as a bare "Failed to load resource"
      // with the URL only on the message location — check that, not the text.
      if (m.type() === 'error') {
        const loc = m.location?.()?.url || '';
        if (!EXTERNAL.test(loc) && !EXTERNAL.test(txt)) {
          consoleIssues.push(`console.error: ${txt}${loc ? ` (${loc})` : ''}`);
        }
      }
    });
    page.on('requestfailed', (r) => {
      if (!EXTERNAL.test(r.url())) {
        consoleIssues.push(`request failed: ${r.failure()?.errorText} ${r.url()}`);
      }
    });
    page.on('pageerror', (e) => consoleIssues.push(`pageerror: ${e.message}`));

    for (const route of ROUTES) {
      const label = `${dev.name}/${lang}/${route.id}`;
      await page.goto(`${BASE}/${route.path}`, { waitUntil: 'networkidle' });
      // Scroll the whole page so every Reveal fires, then return to the top.
      // These MUST be instant: the site sets `scroll-behavior: smooth`, so a
      // default scrollTo animates, and a screenshot taken before it lands
      // captures a blank mid-page band instead of the layout.
      await page.evaluate(async () => {
        const step = window.innerHeight;
        for (let y = 0; y <= document.body.scrollHeight; y += step) {
          window.scrollTo({ top: y, behavior: 'instant' });
          await new Promise((r) => requestAnimationFrame(r));
        }
        window.scrollTo({ top: 0, behavior: 'instant' });
        await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
      });
      await page.waitForTimeout(400);
      await page.waitForFunction(() => window.scrollY === 0, null, { timeout: 5000 }).catch(() => {});

      const report = await page.evaluate((vw) => {
        const out = { overflow: [], smallTaps: [], clipped: [], rawKeys: [], noAlt: [], docWidth: 0 };
        out.docWidth = document.documentElement.scrollWidth;

        // 1. horizontal overflow — find the actual culprits, not just the symptom
        if (document.documentElement.scrollWidth > vw + 1) {
          for (const el of document.querySelectorAll('body *')) {
            const r = el.getBoundingClientRect();
            if (r.width === 0 || r.height === 0) continue;
            const cs = getComputedStyle(el);
            if (cs.position === 'fixed' || cs.visibility === 'hidden') continue;
            // ignore intentionally-offset decorative blur circles
            if (el.getAttribute('aria-hidden') === 'true') continue;
            if (r.right > vw + 1 || r.left < -1) {
              out.overflow.push({
                tag: el.tagName.toLowerCase(),
                cls: (el.className?.baseVal ?? el.className ?? '').toString().slice(0, 90),
                left: Math.round(r.left), right: Math.round(r.right),
                text: (el.textContent || '').trim().slice(0, 45),
              });
            }
          }
        }

        // 2. tap targets
        // WCAG 2.5.5 exempts links inline within a sentence — those cannot be
        // 44px tall without wrecking the line height. Standalone controls
        // (nav, buttons, list items, CTAs) have no such excuse.
        const isInlineInProse = (el) => {
          if (getComputedStyle(el).display !== 'inline') return false;
          const p = el.parentElement;
          if (!p) return false;
          if (!/^(P|LI|SPAN|DD|DT|H[1-6])$/.test(p.tagName)) return false;
          // genuinely surrounded by text, not a link sitting alone in a block
          return (p.textContent || '').trim().length > (el.textContent || '').trim().length + 8;
        };
        const interactive = document.querySelectorAll('a[href], button, summary, [role="button"], input, select');
        for (const el of interactive) {
          const r = el.getBoundingClientRect();
          if (r.width === 0 || r.height === 0) continue;
          if (getComputedStyle(el).visibility === 'hidden') continue;
          if (el.closest('.sr-only') || el.classList.contains('sr-only')) continue;
          if (isInlineInProse(el)) continue;
          if (r.height < 44 || r.width < 24) {
            out.smallTaps.push({
              tag: el.tagName.toLowerCase(),
              w: Math.round(r.width), h: Math.round(r.height),
              text: (el.textContent || el.getAttribute('aria-label') || '').trim().slice(0, 45),
            });
          }
        }

        // 3. text clipped by a fixed-height ancestor
        // .sr-only is clipped on purpose — that is how it hides from sighted users.
        for (const el of document.querySelectorAll('h1,h2,h3,h4,p,span,dt,dd,li,summary')) {
          if (el.children.length) continue;
          if (el.closest('.sr-only') || el.classList.contains('sr-only')) continue;
          if (el.scrollHeight > el.clientHeight + 2 && getComputedStyle(el).overflow === 'hidden') {
            out.clipped.push({ text: (el.textContent || '').trim().slice(0, 45) });
          }
          if (el.scrollWidth > el.clientWidth + 2 && getComputedStyle(el).overflowX === 'hidden') {
            out.clipped.push({ text: (el.textContent || '').trim().slice(0, 45), axis: 'x' });
          }
        }

        // 4. raw translation keys leaking into the UI
        const body = document.body.innerText;
        const keyish = body.match(/\b(?:nav|hero|values|whoWeHelp|philosophy|pricing|single|services|team|finalCta|faq|footer)\.[a-zA-Z0-9.]+/g);
        if (keyish) out.rawKeys = [...new Set(keyish)];

        // 5. images missing alt
        for (const img of document.querySelectorAll('img')) {
          if (img.getAttribute('alt') === null) {
            out.noAlt.push(img.getAttribute('src') || '(no src)');
          }
        }
        return out;
      }, dev.w);

      if (report.overflow.length) {
        const worst = report.overflow.sort((a, b) => b.right - a.right).slice(0, 3);
        add('FAIL', label, `horizontal overflow: page is ${report.docWidth}px wide in a ${dev.w}px viewport. ` +
          worst.map((o) => `<${o.tag} class="${o.cls}"> right=${o.right}`).join(' | '));
      }
      for (const s of report.smallTaps.slice(0, 5)) {
        add('WARN', label, `tap target ${s.w}x${s.h}px (min 44px tall): "${s.text}"`);
      }
      for (const c of report.clipped.slice(0, 5)) {
        add('WARN', label, `text clipped${c.axis === 'x' ? ' horizontally' : ''}: "${c.text}"`);
      }
      if (report.rawKeys.length) {
        add('FAIL', label, `raw translation key rendered: ${report.rawKeys.join(', ')}`);
      }
      for (const a of report.noAlt) add('WARN', label, `<img> without alt: ${a}`);

      if (dev.shot && ['home', 'services', 'team'].includes(route.id)) {
        await page.screenshot({
          path: `${OUT}/${dev.name}-${lang}-${route.id}.png`,
          fullPage: route.id === 'home' ? false : false,
        });
      }
    }

    // mobile menu open-state check (phones only)
    if (dev.kind === 'phone') {
      await page.goto(`${BASE}/#/`, { waitUntil: 'networkidle' });
      // Both the desktop and compact toggles share an aria-label, and the
      // desktop one is display:none at this width — count only visible ones.
      const toggleVisible = await page
        .locator('nav button[aria-label*="span" i], nav button[aria-label*="ingl" i]')
        .filter({ visible: true })
        .count()
        .then((n) => n > 0)
        .catch(() => false);
      if (!toggleVisible) {
        add('FAIL', `${dev.name}/${lang}/home`, 'language toggle is not visible in the mobile header bar');
      }
      const menuBtn = page.locator('nav button[aria-controls="mobile-menu"]');
      if (await menuBtn.count()) {
        await menuBtn.click();
        await page.waitForTimeout(250);
        const menuOverflow = await page.evaluate((vw) => document.documentElement.scrollWidth > vw + 1, dev.w);
        if (menuOverflow) add('FAIL', `${dev.name}/${lang}/menu-open`, 'mobile menu causes horizontal overflow');
        await page.screenshot({ path: `${OUT}/${dev.name}-${lang}-menu.png` });
      }
    }

    for (const c of [...new Set(consoleIssues)]) add('FAIL', `${dev.name}/${lang}`, c);
    await ctx.close();
  }
}

await browser.close();

const fails = issues.filter((i) => i.sev === 'FAIL');
const warns = issues.filter((i) => i.sev === 'WARN');
const dedupe = (arr) => {
  const seen = new Set();
  return arr.filter((i) => { const k = i.msg + i.ctx.split('/').slice(1).join('/'); if (seen.has(k)) return false; seen.add(k); return true; });
};

console.log(`\n${'='.repeat(78)}\nMOBILE + TRANSLATION QA — ${DEVICES.length} viewports x ${LANGS.length} languages x ${ROUTES.length} routes\n${'='.repeat(78)}`);
if (!fails.length) console.log('\n✓ No blocking issues.');
for (const i of dedupe(fails)) console.log(`\n✗ FAIL  ${i.ctx}\n        ${i.msg}`);
for (const i of dedupe(warns)) console.log(`\n! WARN  ${i.ctx}\n        ${i.msg}`);
console.log(`\n${'-'.repeat(78)}\n${fails.length} failures (${dedupe(fails).length} unique), ${warns.length} warnings (${dedupe(warns).length} unique)\nScreenshots: ${OUT}/\n`);
process.exit(fails.length ? 1 : 0);
