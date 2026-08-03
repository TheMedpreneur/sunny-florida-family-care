/*
 * WCAG 2.2 AA + responsive audit.
 *
 * axe-core covers what a machine can decide: contrast, names, roles, landmarks,
 * heading order, language. The checks after it cover what it deliberately does
 * not — reflow at 400% zoom (1.4.10), text spacing (1.4.12), keyboard focus
 * visibility and order (2.4.7 / 2.4.3), and target size (2.5.8).
 *
 *   node scripts/a11y-qa.mjs            # needs `npm run preview` running
 *   AXE=/path/to/axe.min.js node scripts/a11y-qa.mjs
 */
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';

const BASE = process.env.QA_BASE || 'http://localhost:4173';
const AXE = process.env.AXE || '/tmp/package/axe.min.js';
const axeSource = readFileSync(AXE, 'utf8');

const ROUTES = ['/', '/team', '/services', '/services/chronic', '/faq', '/terms', '/privacy'];
const LANGS = ['en', 'es'];
const VIEWPORTS = [
  { name: 'phone-320',  w: 320,  h: 640,  dpr: 2 },   // narrowest phone still in use
  { name: 'phone-390',  w: 390,  h: 844,  dpr: 3 },
  { name: 'tablet-768', w: 768,  h: 1024, dpr: 2 },
  { name: 'desktop',    w: 1440, h: 900,  dpr: 1 },
];

const issues = [];
const add = (sev, ctx, msg) => issues.push({ sev, ctx, msg });

const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});

const settle = async (page) => {
  await page.evaluate(async () => {
    const step = Math.round(window.innerHeight * 0.75);
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 90));
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 250));
  });
  await page.waitForTimeout(300);
};

// ---------------------------------------------------------------- axe sweep
for (const vp of [VIEWPORTS[1], VIEWPORTS[3]]) {
  for (const lang of LANGS) {
    const ctx = await browser.newContext({
      viewport: { width: vp.w, height: vp.h }, deviceScaleFactor: vp.dpr,
    });
    await ctx.addInitScript((l) => { try { localStorage.setItem('sffc-lang', l); } catch { /* */ } }, lang);
    const page = await ctx.newPage();

    for (const route of ROUTES) {
      const label = `${vp.name}/${lang}${route}`;
      await page.goto(`${BASE}${route}`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(400);
      await settle(page);
      await page.addScriptTag({ content: axeSource });

      const res = await page.evaluate(async () =>
        await window.axe.run(document, {
          runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'] },
          resultTypes: ['violations'],
        })
      );

      for (const v of res.violations) {
        const sev = ['critical', 'serious'].includes(v.impact) ? 'FAIL' : 'WARN';
        for (const n of v.nodes) {
          const detail = (n.any || []).concat(n.all || [])
            .map((c) => c.message).filter(Boolean).join('; ');
          add(sev, label, `[${v.id}] ${n.target.join(' ')}${detail ? ' — ' + detail : ''}`);
        }
      }
    }
    await ctx.close();
  }
}

// ------------------------------------------------- reflow, spacing, targets
for (const vp of VIEWPORTS) {
  const ctx = await browser.newContext({
    viewport: { width: vp.w, height: vp.h }, deviceScaleFactor: vp.dpr,
    isMobile: vp.w < 768, hasTouch: vp.w < 768,
  });
  const page = await ctx.newPage();

  for (const route of ROUTES) {
    const label = `${vp.name}${route}`;
    await page.goto(`${BASE}${route}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(400);
    await settle(page);

    const r = await page.evaluate(() => {
      const out = { overflow: null, wide: [], smallTaps: [], clipped: [], crowded: [] };

      if (document.documentElement.scrollWidth > window.innerWidth + 1) {
        out.overflow = `${document.documentElement.scrollWidth} > ${window.innerWidth}`;
      }
      const isClipped = (el) => {
        for (let a = el.parentElement; a; a = a.parentElement) {
          if (/hidden|clip|auto|scroll/.test(getComputedStyle(a).overflowX)) return true;
        }
        return false;
      };
      for (const el of document.querySelectorAll('body *')) {
        const b = el.getBoundingClientRect();
        // Only a real escape counts. A decorative blur sized past the viewport
        // inside an overflow-hidden section cannot scroll the page.
        if (b.width > window.innerWidth + 1 && b.height > 0 && !isClipped(el)) {
          out.wide.push(`${el.tagName.toLowerCase()}.${String(el.className).slice(0, 45)}`);
          break;
        }
      }

      // WCAG 2.5.8 target size, exempting links inline in a sentence
      const inline = (el) => {
        if (getComputedStyle(el).display !== 'inline') return false;
        const p = el.parentElement;
        if (!p || !/^(P|LI|SPAN|DD|DT|H[1-6])$/.test(p.tagName)) return false;
        return (p.textContent || '').trim().length > (el.textContent || '').trim().length + 8;
      };
      for (const el of document.querySelectorAll('a[href],button,summary,[role="button"],input,select')) {
        const b = el.getBoundingClientRect();
        if (!b.width || !b.height) continue;
        if (getComputedStyle(el).visibility === 'hidden') continue;
        if (el.closest('.sr-only') || inline(el)) continue;
        if (b.height < 24 || b.width < 24) {
          out.smallTaps.push(`${Math.round(b.width)}x${Math.round(b.height)} "${(el.textContent || el.getAttribute('aria-label') || '').trim().slice(0, 32)}"`);
        }
      }

      // text clipped by a fixed-height ancestor
      for (const el of document.querySelectorAll('h1,h2,h3,p,li,dt,dd,span,a')) {
        if (el.children.length) continue;
        if (el.closest('.sr-only') || el.classList.contains('sr-only')) continue;
        if (el.scrollHeight > el.clientHeight + 2 && getComputedStyle(el).overflow === 'hidden') {
          out.clipped.push(`${el.tagName.toLowerCase()}: "${el.textContent.trim().slice(0, 34)}"`);
        }
      }

      // adjacent grid/flex columns whose content is touching
      const boxes = [...document.querySelectorAll('footer a, footer span')]
        .map((el) => ({ el, b: el.getBoundingClientRect() }))
        .filter((x) => x.b.width > 0);
      for (let i = 0; i < boxes.length; i++) {
        for (let j = i + 1; j < boxes.length; j++) {
          const A = boxes[i].b, B = boxes[j].b;
          const vOverlap = A.top < B.bottom - 4 && B.top < A.bottom - 4;
          if (!vOverlap) continue;
          const gap = B.left - A.right;
          if (gap > -2 && gap < 8) {
            out.crowded.push(`"${boxes[i].el.textContent.trim().slice(0, 26)}" ~${Math.round(gap)}px from "${boxes[j].el.textContent.trim().slice(0, 26)}"`);
          }
        }
      }
      return out;
    });

    if (r.overflow) add('FAIL', label, `horizontal overflow ${r.overflow}`);
    r.wide.forEach((w) => add('FAIL', label, `element wider than viewport: ${w}`));
    r.smallTaps.forEach((t) => add('FAIL', label, `target under 24x24 (WCAG 2.5.8): ${t}`));
    r.clipped.forEach((c) => add('WARN', label, `clipped text: ${c}`));
    [...new Set(r.crowded)].forEach((c) => add('WARN', label, `footer items crowding: ${c}`));

    // --- WCAG 1.4.10 reflow: 400% zoom must not create a second scroll axis
    if (vp.name === 'desktop') {
      await page.setViewportSize({ width: 360, height: 640 }); // 1280 at 400%
      await page.waitForTimeout(700);
      const reflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1
        ? `${document.documentElement.scrollWidth} > ${window.innerWidth}` : null);
      if (reflow) add('FAIL', `reflow-400%${route}`, `horizontal scrolling at 400% zoom: ${reflow}`);

      // --- WCAG 1.4.12 text spacing: forced spacing must not clip content
      await page.addStyleTag({ content: `#wcag-1412 , * { line-height:1.5 !important;
        letter-spacing:.12em !important; word-spacing:.16em !important; }
        p { margin-bottom:2em !important; }` });
      await page.waitForTimeout(600);
      const spacing = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1
        ? `${document.documentElement.scrollWidth} > ${window.innerWidth}` : null);
      if (spacing) add('FAIL', `text-spacing${route}`, `overflow with WCAG 1.4.12 text spacing: ${spacing}`);

      // Remove it again. Leaving it applied silently distorted every route
      // measured after this one — the audit was reporting its own side effect.
      await page.evaluate(() => {
        for (const s of document.querySelectorAll('style')) {
          if (s.textContent.includes('#wcag-1412')) s.remove();
        }
      });
      await page.setViewportSize({ width: vp.w, height: vp.h });
      await page.waitForTimeout(400);
    }
  }
  await ctx.close();
}

// ------------------------------------------------ keyboard focus + skip link
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);

  await page.keyboard.press('Tab');
  const first = await page.evaluate(() => {
    const el = document.activeElement;
    const s = getComputedStyle(el);
    return {
      text: (el.textContent || '').trim().slice(0, 40),
      href: el.getAttribute('href'),
      outline: s.outlineStyle !== 'none' && parseFloat(s.outlineWidth) > 0,
      ring: s.boxShadow !== 'none',
      visible: el.getBoundingClientRect().width > 0,
    };
  });
  if (!first.href || !first.href.startsWith('#main')) {
    add('WARN', 'keyboard', `first Tab stop is not a skip link (got "${first.text}" → ${first.href})`);
  }
  if (!first.visible) add('FAIL', 'keyboard', 'skip link never becomes visible on focus (WCAG 2.4.7)');

  let missing = 0, checked = 0;
  for (let i = 0; i < 28; i++) {
    await page.keyboard.press('Tab');
    const ok = await page.evaluate(() => {
      const el = document.activeElement;
      if (!el || el === document.body) return true;
      const s = getComputedStyle(el);
      const has = (s.outlineStyle !== 'none' && parseFloat(s.outlineWidth) > 0) || s.boxShadow !== 'none';
      return has;
    });
    checked++;
    if (!ok) missing++;
  }
  if (missing) add('FAIL', 'keyboard', `${missing} of ${checked} focused elements had no visible focus indicator (WCAG 2.4.7)`);
  await ctx.close();
}

await browser.close();

// ------------------------------------------------------------------ report
const uniq = [...new Map(issues.map((i) => [`${i.sev}|${i.msg}`, i])).values()];
const fails = uniq.filter((i) => i.sev === 'FAIL');
const warns = uniq.filter((i) => i.sev === 'WARN');

console.log('='.repeat(78));
console.log('WCAG 2.2 AA + RESPONSIVE AUDIT');
console.log(`${ROUTES.length} routes · ${LANGS.length} languages · ${VIEWPORTS.length} viewports · axe-core + reflow/spacing/keyboard`);
console.log('='.repeat(78));

const show = (label, list) => {
  if (!list.length) return;
  console.log(`\n${label} (${list.length} unique)`);
  for (const i of list.slice(0, 40)) console.log(`  ${i.msg}\n      first seen: ${i.ctx}`);
  if (list.length > 40) console.log(`  …and ${list.length - 40} more`);
};
show('✗ FAILURES', fails);
show('! WARNINGS', warns);
if (!fails.length && !warns.length) console.log('\n✓ No accessibility or responsive issues found.');
console.log(`\n${'-'.repeat(78)}`);
console.log(`${fails.length} failures, ${warns.length} warnings (${issues.length} total observations)`);
process.exit(fails.length ? 1 : 0);
