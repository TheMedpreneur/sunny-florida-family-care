import React from 'react';
import LegalPage from '../components/LegalPage';
import practice from '../data/practice';

const SECTIONS = [
  {
    heading: '1. This is not health insurance',
    body: [
      `${practice.name} is a private-pay primary care practice. Membership is not health insurance, is not a substitute for health insurance, and does not cover hospital care, emergency care, specialist care, imaging, or prescriptions.`,
      'Members are encouraged to carry separate coverage for those needs. Nothing in a membership limits your right to seek care anywhere else, at any time.',
    ],
  },
  {
    heading: '2. Membership and billing',
    body: [
      `Memberships are billed monthly to the card on file. A one-time enrollment fee of $${practice.enrollmentFee} is charged with the first month for all new members.`,
      'You may cancel at any time with 30 days’ written notice. Cancellation stops future billing; the current month is not prorated. If a payment fails, we will contact you before any interruption to your membership.',
    ],
  },
  {
    heading: '3. Single visits',
    body: [
      'Services are also available without a membership at the prices listed on the Services page. Payment is collected at the time of booking and reserves your appointment. Rapid tests are billed in addition to the visit fee.',
    ],
  },
  {
    heading: '4. Telehealth and mobile visits',
    body: [
      'Telehealth visits are available to patients age 3 and older. Children under 3, and anyone with symptoms such as difficulty breathing, dehydration, or significant lethargy, require an in-person evaluation or emergency care.',
      'Mobile visits are available in Duval County and select areas of St. Johns County. Not every condition can be safely evaluated by video or at home; your provider will tell you when a higher level of care is needed.',
    ],
  },
  {
    heading: '5. Scope of practice',
    body: [
      `Care is provided by ${practice.provider.fullTitle}, a board-certified Family Nurse Practitioner licensed in the State of Florida, practicing within the scope of that license.`,
      'Controlled substances are not prescribed via telehealth. Prescription decisions are always at the clinical discretion of your provider.',
    ],
  },
  {
    heading: '6. Cancellations and no-shows',
    body: [
      'Please give as much notice as you can if you need to cancel or reschedule so the time can be offered to someone else. Repeated no-shows may affect future scheduling.',
    ],
  },
  {
    heading: '7. Governing law',
    body: [
      'These terms are governed by the laws of the State of Florida. If any provision is found unenforceable, the remainder stays in effect.',
    ],
  },
];

export default function TermsOfService() {
  return (
    <LegalPage
      title="Terms of"
      titleAccent="Service"
      accentClass="text-brand-sageInk"
      description={`Membership, billing, and telehealth terms for ${practice.name}.`}
      lastUpdated="Last reviewed: July 2026"
      sections={SECTIONS}
    />
  );
}
