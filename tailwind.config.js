/** @type {import('tailwindcss').Config} */

/*
 * SUNNY FLORIDA FAMILY CARE — BRAND PALETTE
 * ==========================================
 * The approved terracotta / sage / cream scheme, DEEPENED in place per
 * Ana's 7/16 note: "I like the flow of the website and tabs but i do feel
 * the color may be a little too light."
 *
 * Same hues she signed off on — every one dropped in value so the site
 * reads like a sun-baked terracotta courtyard instead of a bleached one.
 * Her logo's gold sits warm against this cream; the deepened turquoise
 * echoes the stethoscope in her mark.
 *
 *   TOKEN            WAS        NOW        MOVE
 *   cream            #FDFBF7 →  #F2E8DA    warm sand
 *   creamDark        #F4EFE6 →  #E5D6C1    clay
 *   espresso         #3E2F28 →  #2B1F18    darker ink
 *   terracotta       #E07A5F →  #B84A2E    burnt clay
 *   sage             #799465 →  #4F6B47    deep olive
 *   marigold         #F4C987 →  #D99125    amber
 *   turquoise        #78C6B6 →  #2E7C70    deep coastal teal
 *
 * CONTRAST — all verified against WCAG 2.1 (docs/PALETTE.md has the table)
 *   espresso on cream / creamDark / shell ....... 11–15:1  AAA
 *   muted on cream .............................. 7.26:1   AAA
 *   terracottaInk on cream ...................... 5.58:1   AA
 *   sageInk on cream ............................ 7.07:1   AAA
 *   tealInk on cream ............................ 5.38:1   AA
 *   cream on terracottaDeep ..................... 7.44:1   AAA
 *   shell on terracotta / sage .................. 4.73 / 5.44  AA
 *   espresso on marigold / marigoldLight ........ 6.12 / 7.72  AA/AAA
 *   marigoldLight on espresso / bark ............ 7.72 / 6.41  AAA/AA
 *
 * ⚠️ HARD RULES
 *   1. marigold NEVER carries text on a light surface (2.16:1 on cream).
 *      Gold is for dark surfaces and decorative fills only. Need a warm
 *      accent on light? Use terracottaInk.
 *   2. terracotta (#B84A2E) as TEXT on cream is 4.27 — large text only.
 *      For body-size accent copy use terracottaInk (#9C3D25).
 *   3. Full-bleed terracotta sections use terracottaDeep so cream body
 *      copy on top clears AAA.
 *
 *   4. "Dark surface" in rule 1 means espresso or bark, not the MID-TONES.
 *      An axe-core sweep on 8/2 found gold failing on both of them:
 *        marigold on sage ............ 2.28:1   (membership fee line)
 *        marigoldLight on terracottaDeep  4.35:1 (story pull-quote byline)
 *      On sage and terracottaDeep the only gold that clears AA is
 *      tintYellow — 4.65:1 and 7.04:1. Reach for that, not marigold.
 *
 *   5. Do NOT thin light text with an opacity suffix on a MID-TONE fill.
 *      It composites toward the fill and the ratio collapses:
 *        shell/80 on sage ............ 4.16:1  ✗
 *        shell/85 on sage ............ 4.44:1  ✗   (so close it reads as fine)
 *        shell    on sage ............ 5.44:1  ✓
 *      The same trick is safe on espresso, which is dark enough that even
 *      cream/60 still clears 5.65:1. Carry hierarchy with size or weight
 *      on the mid-tones instead of alpha.
 *
 * Run `node scripts/a11y-qa.mjs` (with `npm run preview` up) before shipping
 * a colour change — it checks every pairing that actually renders, in both
 * languages, rather than the ones listed here.
 */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          /* ---------- SURFACES: light → dark ---------- */
          shell:     '#FAF4EA', // raised cards, insets
          cream:     '#F2E8DA', // page background
          creamDark: '#E5D6C1', // alternating bands
          linen:     '#D9C7AE', // borders, dividers, hairlines
          bark:      '#3D2C21', // dark band surface
          espresso:  '#2B1F18', // ink + deepest surface
          muted:     '#5C4638', // secondary body copy

          /* ---------- PRIMARY: terracotta ---------- */
          terracotta:     '#B84A2E', // solid fills + buttons (shell text on top)
          terracottaInk:  '#9C3D25', // accent TEXT on light surfaces
          terracottaDeep: '#7E3020', // full-bleed sections, hover, pressed

          /* ---------- SECONDARY: sage ---------- */
          sage:    '#4F6B47',
          sageInk: '#3C5236', // small text on light

          /* ---------- SUN ACCENT: amber. DARK SURFACES ONLY ---------- */
          marigold:      '#D99125',
          marigoldLight: '#E9A83C',

          /* ---------- TERTIARY: coastal teal (echoes the logo) ---------- */
          turquoise: '#2E7C70',
          tealInk:   '#26685E', // small text on light

          /* ---------- CARD TINTS (deepened) ---------- */
          tintPink:   '#EBD9CC',
          tintBlue:   '#D8E5E1',
          tintYellow: '#F2E2C0',
          // serviceDetails.js has always asked for tintGreen on the chronic-care
          // service, but the token was never defined — Tailwind emitted nothing
          // and /services/chronic rendered with no tint at all. Same sage family
          // as the other tints, at card weight.
          tintGreen:  '#DCE3D4',
        },
      },
      fontFamily: {
        /*
         * Font stacks with carefully tuned system fallbacks.
         * Each fallback is chosen to closely match the web font's
         * x-height and character width to minimize CLS on swap.
         */
        sans: [
          '"Hanken Grotesk"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        serif: [
          '"Newsreader"',
          'Georgia',
          '"Times New Roman"',
          'Times',
          'serif',
        ],
        hand: [
          '"Caveat"',
          '"Comic Sans MS"',
          '"Segoe Script"',
          'cursive',
        ],
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '24px',
        '3xl': '32px',
      },
      boxShadow: {
        // Deeper ground shadows to match the deeper palette
        'soft': '0 10px 40px -12px rgba(43, 31, 24, 0.20)',
        'lift': '0 18px 50px -18px rgba(43, 31, 24, 0.35)',
        'glow': '0 10px 24px -8px rgba(184, 74, 46, 0.50)',
      },
      transitionTimingFunction: {
        'soft-ease': 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
      transitionDuration: {
        '400': '400ms',
      },
      minHeight: {
        'tap': '44px', // WCAG 2.5.5 / iOS minimum tap target
      },
      minWidth: {
        'tap': '44px',
      },
    },
  },
  plugins: [],
}
