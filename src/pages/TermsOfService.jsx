import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

export default function TermsOfService() {
  return (
    <div className="bg-brand-cream min-h-screen pt-24 pb-24">
      <SEO
        title="Terms of Service"
        description="Terms of service for Sunny Florida Family Care direct primary care memberships, billing policies, and telehealth services."
        url="https://www.sunnyfamily.health/#/terms"
        keywords="terms of service, membership agreement, direct primary care terms, billing policy"
        noindex={true}
      />
      <div className="max-w-[800px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-brand max-w-none"
        >
          <h1 className="text-5xl mb-8">Terms of <span className="italic text-brand-sage">Service</span></h1>

          <div className="space-y-8 font-sans text-brand-espresso/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-serif text-brand-espresso mb-4">1. Direct Primary Care Agreement</h2>
              <p>
                Sunny Florida Family Care operates as a Direct Primary Care (DPC) practice.
                This is not an insurance plan. Our monthly membership fees provide you with
                direct access to primary care services as defined in your member agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-brand-espresso mb-4">2. Membership & Billing</h2>
              <p>
                Memberships are billed monthly on a recurring basis. A one-time enrollment fee
                of $99 is required for all new member accounts. You may cancel your membership
                at any time with a 30-day written notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-brand-espresso mb-4">3. Telehealth & Mobile Services</h2>
              <p>
                Our services are provided via secure telehealth platforms and mobile house calls.
                While we strive to provide comprehensive care, some medical conditions may require
                urgent care or emergency room intervention, which are not covered by your membership.
              </p>
            </section>

            <section>
              <p className="text-sm italic">Last updated: August 2024</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}