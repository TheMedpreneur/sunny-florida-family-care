/*
 * SINGLE SOURCE OF TRUTH FOR PRACTICE DETAILS
 * ============================================
 * Everything Ana might need changed lives here — booking link, contact,
 * payment links, image paths. Change it once, it updates sitewide.
 *
 * ⚠️ ITEMS STILL NEEDING REAL VALUES FROM ANA are marked TODO below.
 */

export const practice = {
  name: 'Sunny Florida Family Care',
  legalName: 'Sunny Florida Family Care, LLC',
  tagline: 'Care by Nurse Practitioners',

  provider: {
    name: 'Ana Adamski',
    credentials: 'FNP-C',
    // Florida Board of Nursing: an APRN is not styled "Dr." in practice-facing
    // materials unless holding a doctorate AND clearly disclosing the license
    // type. Ana is board-certified FNP — always "Ana Adamski, FNP-C".
    fullTitle: 'Ana Adamski, FNP-C',
    // Her own signature block, supplied 8/2. Used where the credential is the
    // point — the Meet Ana headline and the structured data — while the short
    // form above stays on pull-quote attributions so they do not run long.
    credentialsFull: 'MSN, APRN, FNP-C',
    fullTitleLong: 'Ana Adamski, MSN, APRN, FNP-C',
    role: 'Family Nurse Practitioner & Founder',
  },

  // ---- Booking -------------------------------------------------------
  // Ana's live Calendly (emailed 7/17). Every "Book Online" CTA points here.
  calendly: 'https://calendly.com/ana-sunnyfloridafamilycare/30min',

  // ---- Contact -------------------------------------------------------
  // Ana's real practice line and inbox (supplied 8/2), replacing the demo
  // placeholders. smsHref backs the "give us a call or send us a text" line
  // in the footer — on a phone it opens the messaging app directly.
  phone: '(904) 752-2809',
  phoneHref: 'tel:+19047522809',
  smsHref: 'sms:+19047522809',
  email: 'ana@sunnyfloridafamilycare.com',

  serviceArea: 'Jacksonville, FL — serving Duval & St. Johns',

  // This domain drives every canonical URL, og:url, the JSON-LD, the sitemap
  // and robots.txt. It was sunnyfamily.health, which is not registered — so
  // the live site was telling Google its real home was a domain that does not
  // resolve, which suppresses indexing of the page that is actually up.
  //
  // sunnyfloridafamilycare.com is registered (GoDaddy, 14 May 2026) and
  // matches Ana's email, so it is the real home.
  //
  // Apex, not www: www 301s to the apex, and a canonical that redirects is a
  // wasted hop. Keep this in sync with public/sitemap.xml + public/robots.txt.
  //
  // ⚠️ NOT LIVE YET. The site is served from sunny-florida-family-care.pages.dev;
  // this domain still points at a GoDaddy placeholder. Until its DNS is moved
  // to the Cloudflare Pages project, these URLs describe the intended home
  // rather than the current one.
  siteUrl: 'https://sunnyfloridafamilycare.com',

  // NOTE: fixed clinic hours were removed 8/2 at Ana's request — she is still
  // working another job, so posted hours would be wrong more often than right.
  // The footer now advertises same-day availability and invites a call or text
  // instead. openingHoursSpecification was removed from the structured data in
  // SEO.jsx at the same time, so Google cannot keep showing stale hours.

  // ---- Memberships + Stripe payment links -----------------------------
  // VERIFIED AGAINST LIVE STRIPE CHECKOUT 7/27/26. A customer-usable link
  // ALWAYS starts with buy.stripe.com; a dashboard.stripe.com URL is an admin
  // page that customers cannot pay on.
  //
  // Prices and product names below are transcribed from what the Stripe
  // checkout page actually charges, so the site can never advertise one
  // number while Stripe bills another.
  memberships: [
    {
      id: 'kids',
      // ⚠️ PRICE CORRECTION: the site advertised $49/mo but Stripe charges
      // $50/mo. Site now matches Stripe. Confirm the intended figure with
      // Ana — if it should be $49, change the Stripe price, not this file.
      amount: 50,
      ages: '0–18',
      stripeProduct: 'Membership Child & Teen 0-18',
      paymentLink: 'https://buy.stripe.com/4gM4gr9l2gvgeNe2ZTcfK02',
      featured: false,
    },
    {
      id: 'adults',
      amount: 99,
      ages: '18+',
      stripeProduct: 'Membership Adult 18+',
      paymentLink: 'https://buy.stripe.com/aFa8wH1SAbaWawYbwpcfK00',
      featured: true,
    },
    {
      id: 'seniors',
      amount: 129,
      ages: '65+',
      stripeProduct: 'Membership Senior 65+',
      // Recovered from the Stripe dashboard 7/27 — the site previously
      // pointed at the admin URL, which no customer could pay on.
      paymentLink: 'https://buy.stripe.com/aFa00bbta4My20seIBcfK01',
      featured: false,
    },
  ],

  enrollmentFee: 99, // one-time, charged with the first month on all plans

  // ---- What a membership actually buys --------------------------------
  // Ana, 8/2: "I didn't see where patients are able to see what's included
  // with their membership briefly prior to enrolling." Every tier includes
  // the same thing, so this is one shared list rendered above the tiers, plus
  // the visit count repeated inside each card where the Enroll button is.
  //
  // Numbers live here, never inside the translated copy, so the English and
  // Spanish can never disagree about a figure.
  visitsPerMonth: 3,

  // Order is the display order. Copy lives under `pricing.includes.*`.
  membershipIncludes: [
    'visits',
    'messaging',
    'followUps',
    'refills',
    'sameDay',
    'afterHours',
    'sameProvider',
  ],

  // ---- After-hours ----------------------------------------------------
  // Member add-on for same-day telehealth once the day closes. Non-members
  // pay the standalone after-hours price in data/singleVisitPricing.js
  // (telemedicineVisits → afterHours, $99); the two are labelled so they can
  // never be mistaken for each other.
  afterHours: {
    memberAddOn: 50,
    cutoff: '5:00 PM',
  },

  // ---- Images ---------------------------------------------------------
  images: {
    logo: '/images/logo.png',
    // 408 KB at 640×644 for something rendered at 56–96px. The small WebP is
    // what Navbar and Footer actually load; the full PNG stays for the
    // structured data and social cards, which want the large square.
    logoSm: '/images/logo-sm.webp',
    mark: '/images/logo-mark.png',
    anaHero: '/images/ana-hero.jpg',
    anaHeroWebp: '/images/ana-hero.webp',
    anaHeroSm: '/images/ana-hero-sm.webp',
    anaPortrait: '/images/ana-portrait.jpg',
    anaCare: '/images/ana-care.jpg',
    anaCareWebp: '/images/ana-care.webp',

    // Meet Ana — her solo portrait downtown, replacing the with-a-patient
    // shot that was doing double duty on the homepage.
    //
    // These paths are LIVE even before the files exist. CareTeam.jsx requests
    // them, and falls back to the hero photo only if the request 404s — so
    // dropping ana-about.jpg into public/images/ is the entire change. No code
    // edit, nothing to remember.
    //
    // The .webp is optional: if only the .jpg is there, the browser skips the
    // missing <source> and uses it. Generate the .webp when convenient with
    //   node scripts/make-webp.mjs public/images/ana-about.jpg \
    //        public/images/ana-about.webp 1200 0.85
    anaAbout: '/images/ana-about.jpg',
    anaAboutWebp: '/images/ana-about.webp',
    // 700px covers a phone at 2x and a standard desktop at 1x — both were
    // pulling the 1200px file for a frame rendered at 326px and 528px.
    anaAboutSm: '/images/ana-about-sm.webp',
  },
};

/** True when a Stripe link cannot actually take a payment. */
export const isBadStripeLink = (link) =>
  !link || !link.startsWith('https://buy.stripe.com');

export default practice;
