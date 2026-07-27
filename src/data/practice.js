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
    role: 'Family Nurse Practitioner & Founder',
  },

  // ---- Booking -------------------------------------------------------
  // Ana's live Calendly (emailed 7/17). Every "Book Online" CTA points here.
  calendly: 'https://calendly.com/ana-sunnyfloridafamilycare/30min',

  // ---- Contact -------------------------------------------------------
  // TODO(Shane): replace with Ana's real practice line + inbox before launch.
  // These are still the demo placeholders from the original build.
  phone: '(904) 555-0123',
  phoneHref: 'tel:9045550123',
  email: 'hola@sunnyfamily.health',
  phoneIsPlaceholder: true,
  emailIsPlaceholder: true,

  serviceArea: 'Jacksonville, FL — serving Duval & St. Johns',
  siteUrl: 'https://www.sunnyfamily.health',

  hours: {
    monFri: '8:00 AM – 6:00 PM',
    sat: '9:00 AM – 2:00 PM',
  },

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

  // ---- Images ---------------------------------------------------------
  images: {
    logo: '/images/logo.png',
    mark: '/images/logo-mark.png',
    anaHero: '/images/ana-hero.jpg',
    anaHeroWebp: '/images/ana-hero.webp',
    anaHeroSm: '/images/ana-hero-sm.webp',
    anaPortrait: '/images/ana-portrait.jpg',
    anaCare: '/images/ana-care.jpg',
    anaCareWebp: '/images/ana-care.webp',
  },
};

/** True when a Stripe link cannot actually take a payment. */
export const isBadStripeLink = (link) =>
  !link || !link.startsWith('https://buy.stripe.com');

export default practice;
