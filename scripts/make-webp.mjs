/*
 * Resize + WebP-encode with headless Chromium.
 *
 * sharp, cwebp, ImageMagick and vips are all absent from this container, but
 * Playwright is already a devDependency and Chromium ships with a WebP encoder
 * behind canvas.toDataURL. So: draw the source into a canvas at the target
 * size, read it back as WebP, write the bytes.
 *
 * Usage: node make-assets.mjs <src> <out.webp> <maxWidth> [quality]
 */
import { chromium } from 'playwright';
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const [, , src, out, maxWidthArg, qualityArg] = process.argv;
if (!src || !out || !maxWidthArg) {
  console.error('usage: node make-assets.mjs <src> <out.webp> <maxWidth> [quality]');
  process.exit(1);
}

const maxWidth = Number(maxWidthArg);
const quality = Number(qualityArg ?? 0.86);

const ext = path.extname(src).slice(1).toLowerCase();
const mime = ext === 'png' ? 'image/png' : ext === 'webp' ? 'image/webp' : 'image/jpeg';
const dataUri = `data:${mime};base64,${readFileSync(src).toString('base64')}`;

// Same prebuilt Chromium the mobile QA pass uses — Playwright's own pinned
// build is usually a different revision than whatever the sandbox ships.
const browser = await chromium.launch({
  executablePath:
    process.env.CHROMIUM_PATH || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});
const page = await browser.newPage();

const result = await page.evaluate(
  async ({ dataUri, maxWidth, quality }) => {
    const img = new Image();
    img.src = dataUri;
    await img.decode();

    const scale = Math.min(1, maxWidth / img.naturalWidth);
    const w = Math.round(img.naturalWidth * scale);
    const h = Math.round(img.naturalHeight * scale);

    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, 0, 0, w, h);

    return {
      w,
      h,
      srcW: img.naturalWidth,
      srcH: img.naturalHeight,
      data: canvas.toDataURL('image/webp', quality),
    };
  },
  { dataUri, maxWidth, quality }
);

await browser.close();

if (!result.data.startsWith('data:image/webp')) {
  console.error('Chromium did not return WebP — got', result.data.slice(0, 30));
  process.exit(1);
}

const bytes = Buffer.from(result.data.split(',')[1], 'base64');
writeFileSync(out, bytes);

const before = readFileSync(src).length;
console.log(
  `${path.basename(src)} ${result.srcW}x${result.srcH} (${(before / 1024).toFixed(0)}KB)` +
    ` -> ${path.basename(out)} ${result.w}x${result.h} (${(bytes.length / 1024).toFixed(1)}KB)`
);
