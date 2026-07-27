import React from 'react';
import LegalPage from '../components/LegalPage';
import practice from '../data/practice';

const SECTIONS = [
  {
    heading: 'Your privacy matters here',
    body: [
      `${practice.name} takes your privacy as seriously as your health. This notice describes how your health information may be used and disclosed, and how you can access it.`,
    ],
  },
  {
    heading: 'How your information is protected',
    body: [
      'Your health information is kept in an electronic health record with access controls, and telehealth visits run on an encrypted platform. Only your provider and the systems required to deliver and bill for your care can access your chart.',
      'This practice follows the privacy and security requirements of the Health Insurance Portability and Accountability Act (HIPAA) and maintains business associate agreements with the vendors that handle protected health information on its behalf.',
    ],
  },
  {
    heading: 'How your information is used',
    body: [
      'Your health information is used for treatment, to collect payment for that treatment, and for the ordinary operations of the practice. It is never sold, and it is never shared with third parties for marketing.',
      'Some disclosures are required by law — for example, reporting certain communicable diseases or responding to a valid court order. Any other disclosure requires your written authorization, which you can revoke at any time.',
    ],
  },
  {
    heading: 'Your rights',
    body: [
      'You have the right to see and get a copy of your record, to ask for a correction, to request a list of certain disclosures, to ask that we communicate with you a particular way, and to request restrictions on how your information is used.',
      'To exercise any of these rights, or to file a complaint, contact the practice using the details below. You may also file a complaint with the U.S. Department of Health and Human Services Office for Civil Rights. You will never be penalized for filing a complaint.',
    ],
  },
  {
    heading: 'Payments and this website',
    body: [
      'Card payments are processed by Stripe. Full card numbers are never stored by this practice or on this website. Appointment booking is handled through Calendly, and clinical records are kept in the practice electronic health record.',
      'This website itself does not collect health information. Any details you enter while booking are handled by those scheduling and payment providers under their own privacy terms.',
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy &"
      titleAccent="HIPAA"
      accentClass="text-brand-tealInk"
      description={`How ${practice.name} protects and uses your health information.`}
      lastUpdated="Last reviewed: July 2026"
      sections={SECTIONS}
    />
  );
}
