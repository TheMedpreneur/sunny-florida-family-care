# Sunny Florida Family Care — Build & Audit Report
**27 July 2026**, updated **2 August 2026** · prepared for Ana's review round

---

## 0. Ana's 8/2 round — what changed

| # | Her note | What was done |
|---|---|---|
| 1 | Add the real phone and email | ✅ `(904) 752-2809` / `ana@sunnyfloridafamilycare.com`, sitewide from one file |
| 2 | Say the membership is 3 visits/month, and show what's included before enrolling | ✅ "Every membership includes" panel **above** the tiers, plus the visit count on each card |
| 3 | Price after-hours for members | ✅ $50 add-on, with her availability + 911 wording, next to the price |
| 4 | Link Stripe/OptiMantra; add single-service prices | ✅ Answered in §9 below; per-service Pay buttons wired and dormant |
| 5 | Different photo on Meet Ana | ⏳ **Needs the file** — see §10 |
| 6 | New Meet Ana introduction | ✅ Her text, word for word |
| 7 | "See single-visit pricing" is not working | ✅ **Fixed** — it was two separate bugs, see below |
| 8 | Remove the hours, keep same-day, add the call/text line | ✅ Removed from the footer **and** from the structured data |
| 9 | "I'm here for you" is hard to read | ✅ Opaque card, larger and darker script, scrim behind |
| 10 | Story photo is too close up | ✅ Was being force-cropped into a square; now shows at its own ratio |

**The "See single-visit pricing" button was broken in two different ways.** It was a plain
`<Link to="/services">` with no anchor. Clicked from the homepage it landed on the services hero,
two full sections above the pricing menu. Clicked from the services page — where the same block
also renders — the pathname never changed, so the scroll effect never re-fired and *nothing
happened at all*. It now points at `/services#single-visit`, and the scroll handler in `App.jsx`
keys on `location.key` so a same-page click still works, retrying across frames because the route
is lazy-loaded.

**Two defects found while auditing, both fixed:** `/services/chronic` was rendering with no
background tint (`serviceDetails.js` asked for a `tintGreen` token that was never defined), and the
399 KB logo PNG was being loaded on every page at 56–96 px — now a 42 KB WebP.

---

## 1. Stripe — verified against live checkout

Each payment link was opened in a real browser and read off the actual checkout page.

| Plan | Site said | Stripe product | Stripe charges | Status |
|---|---|---|---|---|
| Child & Teen | $49/mo | Membership Child & Teen 0-18 | **$50/mo** + $99 | ⚠️ **Corrected** |
| Adult | $99/mo | Membership Adult 18+ | $99/mo + $99 | ✅ Matches |
| Senior | $129/mo | Membership Senior 65+ | $129/mo + $99 | ⚠️ **Link was broken** |

**Two real problems found:**

1. **The Senior button could not take a payment.** It pointed at
   `dashboard.stripe.com/...` — a Stripe admin page. A patient clicking "Enroll Now"
   would have hit a login wall. The working link (`buy.stripe.com/aFa00bbta4My20seIBcfK01`)
   was recovered from the dashboard and is now wired in.

2. **The Child & Teen price was wrong by a dollar.** The site advertised $49/mo;
   Stripe bills $50/mo. Advertising one price and charging another is a consumer-protection
   problem, so the site now shows $50. **Ana needs to confirm which is intended** — if it
   should be $49, change the price in Stripe rather than the site.

The site now guards against this class of bug: any link not starting with
`buy.stripe.com` is treated as broken, and in development the button renders a warning
instead of silently failing.

### Still open on Stripe
- **OptiMantra told Ana she needs a *new* Stripe account** (7/23) because it cannot connect
  an existing one. If she moves, **all three payment links above become orphaned** and must
  be rebuilt in the new account. Worth resolving before launch, not after.
- Klarna, Cash App Pay, and Amazon Pay are enabled on the membership links. Buy-now-pay-later
  on a healthcare membership is an unusual fit — worth a conscious decision.
- Address collection is off. Fine for telehealth; revisit if mobile visits need it for routing.

---

## 2. Content accuracy — the biggest risk found

The demo build carried invented content that would have gone live under a real provider's
license. All removed:

- **Three fictional staff** — "Dr. Elena Santiago", "Mateo Rivera, NP", "Sofia Mendez" —
  appearing on the Care Team page, in the hero photo caption, and in a pull quote.
- **Five fabricated patient testimonials**, including invented clinical outcomes
  ("My A1C went from 9.2 to 6.4 in eight months") attributed to named patients.
  For a practice with no patients yet, this is an FTC endorsement-rule and Florida Board
  advertising exposure, not just a copy problem.
- **Six invented blog posts** dated 2024, with stock photography.
- **"Dr." throughout.** Ana is a board-certified FNP. Every reference is now
  *Ana Adamski, FNP-C*.
- **Descriptions of a physical clinic** she does not have ("our kid-friendly space has books
  and toys", "real plants and indoor palms", "come in as often as you need").

The Care Team page is now a single-provider page written from Ana's own words in the
Next Steps email — including the line about being the provider who calls on a random
weekend to check on your child.

---

## 3. Ana's feedback list (7/16)

| # | Her request | Status |
|---|---|---|
| 1 | Homepage English, Spanish available after | ✅ Defaults to English; toggle is one tap, choice persists |
| 2 | Colours are too light; match the logo | ✅ Whole palette deepened in place |
| 3 | How will my name appear? | ✅ *Ana Adamski, FNP-C* — Florida Board compliant |
| 4 | Make the logo top-left bigger | ✅ Her real logo, 56px phone / 96px desktop |
| 5 | Calendly | ✅ Every "Book Online" now opens her Calendly |
| 8 | Her photo on the site | ✅ Hero and story section |
| — | Spanish translator button missing on mobile (7/19) | ✅ **Fixed** — it only existed inside the collapsed hamburger menu |
| — | Translate the service names for her Hispanic patients (7/19) | ✅ Full menu bilingual, using **her own Spanish verbatim** |
| — | Telemedicine from age 3 (7/21) | ✅ Stated on the services page, in the terms, and in the FAQ |

---

## 4. Colour — deepened, not redesigned

Her original hues, dropped in value. Same scheme she approved, no longer washed out.

| Token | Was | Now |
|---|---|---|
| Page background | `#FDFBF7` | `#F2E8DA` warm sand |
| Alternating band | `#F4EFE6` | `#E5D6C1` clay |
| Ink | `#3E2F28` | `#2B1F18` |
| Terracotta | `#E07A5F` | `#B84A2E` burnt clay |
| Sage | `#799465` | `#4F6B47` deep olive |
| Marigold | `#F4C987` | `#D99125` amber |

Every pairing was checked against WCAG 2.1 and the ratios are documented at the top of
`tailwind.config.js`, along with two hard rules the palette enforces — gold never carries
text on a light surface (2.16:1), and full-bleed terracotta sections use the deeper shade
so cream body copy clears AAA.

---

## 5. Performance

Homepage first load, gzipped: **137.6 KB → 96.3 KB (−30%)**. Total bundle −29%.

| Change | Why |
|---|---|
| Removed `@questlabs/react-sdk`, `@supabase/supabase-js`, `echarts`, `echarts-for-react`, `date-fns` | Never imported anywhere. Leftovers from the starter template — 178 packages. |
| Removed `framer-motion` | Used only for fade-in-on-scroll. Replaced with a ~1 KB IntersectionObserver component. |
| Removed `react-icons` | `SafeIcon` did `import * as FiIcons` then indexed it dynamically — a namespace import the bundler cannot tree-shake, so **all ~280 Feather icons shipped to every visitor**. Replaced with the 25 actually used, inlined. |
| Images | Ana's photo optimised to WebP with JPEG fallback, explicit dimensions, hero preloaded |
| Fonts | Trimmed to the weights actually used; non-blocking load with system fallbacks |
| Chunking | React and the router split into stable long-cache chunks |

---

## 6. Accessibility & mobile

Automated pass across **8 viewports × 2 languages × 7 routes** — iPhone SE through iPad Pro,
portrait and landscape. Checks horizontal overflow, tap-target size, clipped text, raw
translation keys leaking into the UI, and missing alt text.

**Result: zero failures, zero warnings.**

Fixed along the way:
- Nav links were 24px tall on iPad — below the 44px touch minimum, on a touch device.
- The phone number in the closing CTA was a 17px tap target.
- Ana's bilingual tagline fragmented into two clipped pills when it wrapped on a phone.
- Reduced-motion is honoured throughout — relevant for the senior patients she serves.

---

## 7. Translation integrity

**325 strings, English and Spanish, key-for-key identical.** `npm run build` fails if they
ever drift apart, if a string is empty, or if Spanish is left identical to English.

Ana supplied her own Spanish for the private-services menu. That wording is used **verbatim** —
her taglines now carry the site:

- *"Su Salud. Su Tiempo. Su Cuidado."* — the single-visit pricing heading
- *"Atención Médica Diseñada Para Usted"* — the story section
- *"Atención Primaria Personalizada"* — the hero eyebrow, bilingual in both modes

The Spanish for the telemedicine and rapid-test menu is **ours, not hers** — flagged in the
code and **should be confirmed with Ana before launch.**

Also fixed: the translation lookup returned the raw key path (`hero.subtitle`) as visible
text whenever a value was falsy. It now falls back to English and warns in development.

---

## 8. Before launch — needs a human

1. ~~Real phone number and email.~~ ✅ Done 8/2.
2. **Confirm the $49 vs $50 Child & Teen price** with Ana.
3. **Resolve the OptiMantra / Stripe account question** before the links are promoted. See §9.
4. **Have a Florida healthcare attorney review the Privacy and Terms pages.** They are a
   drafted starting point, flagged as such in the code. Florida DPC agreements have
   statutory language requirements (Fla. Stat. § 624.27) a template cannot safely guess at.
5. **Confirm the Spanish** for the telemedicine and rapid-test menu with Ana — and now also for
   her new Meet Ana introduction, the membership inclusions, and the footer. Her English is used
   word for word; the Spanish rendering of it is ours.
6. **Hosting note:** the site uses hash-based routing (`/#/services`). It works on any static
   host but is weaker for SEO than clean URLs. Switching is a small change once hosting is
   settled — worth doing before Google indexes the site. `public/_redirects` is already staged
   for it. Related: `sitemap.xml` still lists only the homepage, which is correct *while* hash
   routing is in use (Google ignores fragments) and wrong the moment it isn't.
7. **The member rate for same-day sick visits.** Ana asked for "discounts with same day sick
   visits" but never gave the figure. The site says *"Member rates on same-day sick visits"* with
   no number attached, because publishing a discount the practice has not set is worse than
   publishing none. Give us the number and it goes in.
8. **Which domain is real.** Every canonical URL, `sitemap.xml` and `robots.txt` say
   `www.sunnyfamily.health`, but Ana's email is `@sunnyfloridafamilycare.com`. If the site lives
   at the latter, `practice.siteUrl` and those two files need to change together — otherwise
   Google is told the site's own address is somewhere it isn't.
9. **`public/images/ana-about.jpg`.** See §10.

---

## 9. Stripe and OptiMantra — Ana's question, answered

> *"How will we link the Stripe account I have through OptiMantra to the website, and how will we
> add the membership prices, single service prices etc?"*

**There is nothing to "connect."** The site does not talk to Stripe's API and holds no keys —
`.env` contains only a comment saying so. Every payment is a **Stripe Payment Link**: a URL Stripe
hosts, that the site links to like any other link. That is deliberate. A frontend that held a
Stripe key would expose it to every visitor.

**So the whole job is pasting URLs into one of two files:**

| What | Where | Today |
|---|---|---|
| The three memberships | `src/data/practice.js` → `memberships[].paymentLink` | Live, verified against real checkout |
| Every single service, test and visit | `src/data/singleVisitPricing.js` → `paymentLink` on any row | Wired, no links yet — see below |

**If OptiMantra requires a new Stripe account,** the three membership links above stop working the
day the old account closes. Recreate the three products in the new account, copy the new
`buy.stripe.com` URLs, paste them over the old ones. Nothing else in the codebase changes. Worth
doing *before* the links are promoted anywhere, not after.

A link must start with `https://buy.stripe.com`. `isBadStripeLink()` rejects anything else and the
button does not render — because the Senior tier once shipped pointing at a `dashboard.stripe.com`
admin page that no patient could pay on (§1).

**Single-service Pay buttons** are built and switched off. Every row in `singleVisitPricing.js`
accepts an optional `paymentLink`; when one is present the row grows a "Pay now" button, and when
it is absent the row renders exactly as it does today. So the menu can go live now and become
payable one service at a time, in whatever order Ana creates the links — no code change per row.
For each service she wants payable: create the product in Stripe at **exactly** the price shown on
the site, create a Payment Link, paste the URL. Advertising one figure and charging another is a
consumer-protection problem, which is why the two must match by hand.

Still worth a conscious decision: **Klarna, Cash App Pay and Amazon Pay are enabled** on the
membership links. Buy-now-pay-later on a healthcare membership is an unusual fit.

---

## 10. The Meet Ana photo — still needed

Ana sent a new photo on 8/2: her own portrait on the downtown waterfront, in her branded coat.
It is the right call — the photo that page used was the *same* shot as the homepage hero, so she
appeared twice in the same frame, and all three images on the site were crops of one photograph.

**The file itself has not reached the repo.** It needs to be saved as
`public/images/ana-about.jpg`, and then:

```bash
CHROMIUM_PATH=/opt/pw-browsers/chromium-1194/chrome-linux/chrome \
  node scripts/make-webp.mjs public/images/ana-about.jpg public/images/ana-about.webp 1200 0.85
```

then uncomment the two `anaAbout` keys in `src/data/practice.js`. `CareTeam.jsx` picks them up and
switches to a landscape frame automatically; until then it falls back to the current photo, so
nothing is ever broken mid-swap.

`scripts/make-webp.mjs` exists because this container has no `sharp`, `cwebp`, ImageMagick or
`vips` — it resizes and encodes through headless Chromium, which is already installed for the
mobile QA pass. Same tool generated `logo-sm.webp`.

---

## Commands

```
npm install
npm run dev          # local development
npm run build        # runs the translation check + lint, then builds
npm run check:i18n   # English/Spanish parity
node scripts/mobile-qa.mjs   # mobile + tablet + translation pass (needs `npm run preview` running)
```
