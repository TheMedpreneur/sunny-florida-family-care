/*
 * SINGLE-VISIT ("a la carte") PRICING
 * ===================================
 * Two menus, both transcribed verbatim from Ana's email:
 *
 *   1. Private Services & Pricing  (7/19) — she supplied BOTH the English and
 *      the Spanish herself. Her Spanish wording is used verbatim in
 *      translations/index.js; do not "improve" it.
 *   2. Rapid tests + telemedicine visits (7/21) — English only from her.
 *      The Spanish for menu 2 is ours and is flagged for her review.
 *
 * Prices live here as numbers, never inside the copy, so the English and
 * Spanish versions can never drift apart on a dollar figure.
 *
 *
 * PAYING ONLINE FOR A SINGLE SERVICE
 * ==================================
 * Every row below accepts an optional `paymentLink`. When one is present AND
 * it is a real customer-facing checkout URL, that row renders a "Pay" button
 * next to the price. When it is absent — which is the case for every row
 * today — the row renders exactly as it always has, price only.
 *
 * That means this file is the whole job: paste a URL, that service becomes
 * payable. Nothing else in the codebase changes.
 *
 * ⚠️ A link must start with https://buy.stripe.com. A dashboard.stripe.com
 * URL is an admin page no patient can pay on — that exact mistake shipped
 * once on the Senior membership tier. isBadStripeLink() in data/practice.js
 * rejects anything else, and the button simply does not render.
 *
 * TO TURN THESE ON, for each service Ana wants payable:
 *   1. Stripe Dashboard → Product catalogue → add a product with the price
 *      shown here (the two must match exactly — advertising one figure and
 *      charging another is a consumer-protection problem, not a typo).
 *   2. Create a Payment Link for it, copy the buy.stripe.com URL.
 *   3. Paste it as `paymentLink: '...'` on the matching row.
 *
 * If OptiMantra requires a brand-new Stripe account, these links have to be
 * rebuilt in that account — same as the three membership links in
 * data/practice.js. See AUDIT.md §1.
 */

/** Menu 1 — private services, grouped exactly as Ana grouped them. */
export const serviceGroups = [
  {
    id: 'primaryCare',
    items: [
      { id: 'newPatient', price: 175 },
      { id: 'followUp',   price: 95 },
      { id: 'sameDay',    price: 125 },
    ],
  },
  {
    id: 'preventive',
    items: [
      { id: 'annual',    price: 200 },
      { id: 'labReview', price: 95 },
      { id: 'medReview', price: 75 },
    ],
  },
  {
    id: 'support',
    items: [
      { id: 'chronic',   price: 150 },
      { id: 'lifestyle', price: 125 },
    ],
  },
  {
    id: 'additional',
    items: [
      { id: 'forms',        price: 50, from: true },
      { id: 'coordination', price: null }, // quoted per case
    ],
  },
];

/** Menu 2a — rapid tests offered on mobile visits. */
export const rapidTests = [
  { id: 'covid',    price: 25 },
  { id: 'flu',      price: 25 },
  { id: 'strep',    price: 25 },
  { id: 'covidFlu', price: 45 },
  { id: 'combo',    price: 60 },
];

/**
 * Menu 2b — telemedicine visit pricing, adults & children.
 *
 * `afterHours` here is the NON-MEMBER price. Members pay the smaller add-on
 * in practice.afterHours.memberAddOn instead, shown on the membership block.
 * Both are labelled in the copy so the two figures cannot be confused.
 */
export const telemedicineVisits = [
  { id: 'newPatient',  price: 99 },
  { id: 'established', price: 75 },
  { id: 'sameDaySick', price: 75 },
  { id: 'followUp',    price: 55 },
  { id: 'refill',      price: 55 },
  { id: 'afterHours',  price: 99 },
];

/** 13 conditions commonly treated, keyed for translation. */
export const conditionIds = [
  'cold', 'throat', 'flu', 'covid', 'sinus', 'ear', 'pinkEye', 'allergies',
  'uti', 'stomach', 'rash', 'bites', 'refills',
];

/** What every visit includes. */
export const includedIds = [
  'evaluation', 'plan', 'prescriptions', 'note', 'referrals',
];

/** Ana: "telemedicine will be for children ages starting 3 years and older". */
export const TELEHEALTH_MIN_AGE = 3;
