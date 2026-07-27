import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

export default function PrivacyPolicy() {
  return (
    <div className="bg-brand-cream min-h-screen pt-24 pb-24">
      <SEO
        title="Privacy Policy & HIPAA Compliance"
        description="Learn how Sunny Florida Family Care protects your health information. Fully HIPAA compliant with secure telehealth and encrypted patient records."
        url="https://www.sunnyfamily.health/#/privacy"
        keywords="privacy policy, HIPAA compliance, health information, patient privacy, secure telehealth"
        noindex={true}
      />
      <div className="max-w-[800px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-brand max-w-none"
        >
          <h1 className="text-5xl mb-8">Privacy & <span className="italic text-brand-turquoise">HIPAA</span></h1>

          <div className="space-y-8 font-sans text-brand-espresso/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-serif text-brand-espresso mb-4">Your Privacy is Sacred</h2>
              <p>
                At Sunny Florida Family Care, we take your privacy as seriously as your health.
                This notice describes how medical information about you may be used and disclosed
                and how you can get access to this information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-brand-espresso mb-4">HIPAA Compliance</h2>
              <p>
                We are fully compliant with the Health Insurance Portability and Accountability
                Act (HIPAA). We use secure, encrypted platforms for all telehealth visits,
                electronic health records (EHR), and patient communications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-brand-espresso mb-4">Use of Information</h2>
              <p>
                We use your health information for treatment, to obtain payment for treatment
                (via our membership system), and for healthcare operations. We will not sell or
                share your information with third parties for marketing purposes.
              </p>
            </section>

            <section>
              <p className="text-sm italic">
                For questions regarding your privacy, please contact us at hola@sunnyfamily.health
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}