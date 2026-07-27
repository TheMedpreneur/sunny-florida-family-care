/*
 * Fails the build if English and Spanish drift apart.
 *
 * Ana tests the site in both languages and reported a missing control on her
 * phone once already. A missing translation key is the same class of bug: it
 * ships silently and only her Spanish-speaking patients see it.
 */
import { translations } from '../src/translations/index.js';

const flatten = (obj, prefix = '', out = new Map()) => {
  if (Array.isArray(obj)) {
    obj.forEach((v, i) => flatten(v, `${prefix}.${i}`, out));
  } else if (obj && typeof obj === 'object') {
    for (const [k, v] of Object.entries(obj)) {
      flatten(v, prefix ? `${prefix}.${k}` : k, out);
    }
  } else {
    out.set(prefix, obj);
  }
  return out;
};

const en = flatten(translations.en);
const es = flatten(translations.es);

const missingEs = [...en.keys()].filter((k) => !es.has(k));
const missingEn = [...es.keys()].filter((k) => !en.has(k));
const emptyValues = [...en, ...es].filter(([, v]) => typeof v === 'string' && v.trim() === '');

// A Spanish string identical to the English one is usually an untranslated
// paste, not a deliberate choice. Proper nouns are the legitimate exception.
const ALLOWED_IDENTICAL = new Set([
  'footer.designed',   // "Care by Nurse Practitioners" is on her logo, untranslated by design
  'hero.location',     // the tagline is deliberately bilingual in both modes
  'values.spanish',    // "Se habla español" is already Spanish in both
]);
const untranslated = [...en.entries()].filter(
  ([k, v]) =>
    typeof v === 'string' &&
    v.length > 14 &&
    es.get(k) === v &&
    !ALLOWED_IDENTICAL.has(k)
);

let failed = false;
const report = (label, items, fmt = (x) => x) => {
  if (!items.length) return;
  failed = true;
  console.error(`\n✗ ${label} (${items.length}):`);
  items.slice(0, 25).forEach((i) => console.error(`    ${fmt(i)}`));
  if (items.length > 25) console.error(`    …and ${items.length - 25} more`);
};

report('Missing Spanish translations', missingEs);
report('Keys present in Spanish but not English', missingEn);
report('Empty strings', emptyValues, ([k]) => k);
report('Spanish identical to English (likely untranslated)', untranslated, ([k]) => k);

if (failed) {
  console.error('\ni18n check failed — fix the keys above before building.\n');
  process.exit(1);
}

console.log(`✓ i18n check passed — ${en.size} strings, en/es in sync`);
