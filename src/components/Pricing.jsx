import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { useLanguage } from '../context/LanguageContext';

export default function Pricing() {
  const { t } = useLanguage();

  // 👇 STRIPE LINKS 👇
  const plans = [
    {
      nameId: "kids",
      amount: 49,
      paymentLink: "https://buy.stripe.com/4gM4gr9l2gvgeNe2ZTcfK02", // ✅ Live
      currency: "usd",
      interval: "month",
      featured: false
    },
    {
      nameId: "adults",
      amount: 99,
      paymentLink: "https://buy.stripe.com/aFa8wH1SAbaWawYbwpcfK00", // ✅ Live
      currency: "usd",
      interval: "month",
      featured: true
    },
    {
      nameId: "seniors",
      amount: 129,
      paymentLink: "https://dashboard.stripe.com/acct_1Tn6jS0CF3iv41kc/payment-links/plink_1Tslq10CF3iv41kcOuIteNym", // ⚠️ Needs buy.stripe.com link
      currency: "usd",
      interval: "month",
      featured: false
    }
  ];

  const handleLinkClick = (e, link) => {
    if (!link) {
      e.preventDefault();
      alert("Please copy a live Payment Link from your Stripe Dashboard and paste it into the Pricing.jsx file!");
    } else if (link.includes("dashboard.stripe.com")) {
      e.preventDefault();
      alert("⚠️ This is a Stripe Dashboard link! Customers cannot use this to pay. Please create a Payment Link (starts with buy.stripe.com) from your product page and paste it into the code.");
    }
  };

  return (
    <section className="py-24 bg-brand-creamDark border-t border-brand-espresso/5" id="pricing">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-sans text-sm tracking-wider uppercase text-brand-sage font-bold mb-4 block">
            {t('pricing.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl mb-6">
            {t('pricing.title')} <span className="italic text-brand-terracotta">{t('pricing.titleItalic')}</span>
          </h2>
          <p className="text-lg text-brand-espresso/70 max-w-2xl mx-auto font-sans">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-center">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-[32px] flex flex-col items-center text-center h-full ${
                plan.featured 
                  ? 'bg-brand-sage text-brand-cream shadow-soft md:-translate-y-4 py-12' 
                  : 'bg-brand-cream border border-brand-espresso/5 text-brand-espresso'
              }`}
            >
              <h3 className="text-2xl mb-4">{t(`pricing.plans.${plan.nameId}`)}</h3>
              
              <div className="mb-1 flex items-baseline gap-1">
                <span className="text-3xl font-serif">$</span>
                <span className="text-5xl font-serif font-medium">{plan.amount}</span>
                <span className={`font-sans text-sm ${plan.featured ? 'text-brand-cream/70' : 'text-brand-espresso/50'}`}>
                  /{plan.interval}
                </span>
              </div>
              
              {/* Highlighted $99 Enrollment Fee */}
              <div className={`font-sans text-sm font-semibold mb-8 ${plan.featured ? 'text-brand-marigold' : 'text-brand-terracotta'}`}>
                {t('pricing.enrollmentFee')}
              </div>

              <Button 
                variant={plan.featured ? "secondary" : "outline"}
                className={`w-full mt-auto ${plan.featured ? 'bg-white text-brand-sage hover:bg-brand-cream' : ''}`}
                href={plan.paymentLink || "#"}
                onClick={(e) => handleLinkClick(e, plan.paymentLink)}
                target={plan.paymentLink && !plan.paymentLink.includes("dashboard.stripe.com") ? "_blank" : "_self"}
                rel="noopener noreferrer"
              >
                {t('pricing.plans.enroll')}
              </Button>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center font-sans text-brand-espresso/50 text-sm">
          {t('pricing.enrollment')}
        </p>
      </div>
    </section>
  );
}