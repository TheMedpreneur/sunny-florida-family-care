import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Reveal from './Reveal';
import Icon from '../common/Icon';
import { useLanguage } from '../context/LanguageContext';
import practice, { isBadStripeLink } from '../data/practice';

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <section
      className="py-20 md:py-24 bg-brand-creamDark border-y border-brand-linen"
      id="pricing"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <span className="font-sans text-sm tracking-wider uppercase text-brand-sageInk font-bold mb-4 block">
            {t('pricing.badge')}
          </span>
          <h2 id="pricing-heading" className="text-3xl sm:text-4xl md:text-5xl mb-6 text-balance">
            {t('pricing.title')}{' '}
            <span className="italic text-brand-terracottaInk">{t('pricing.titleItalic')}</span>
          </h2>
          <p className="text-lg text-brand-muted max-w-2xl mx-auto font-sans">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {practice.memberships.map((plan, i) => {
            const broken = isBadStripeLink(plan.paymentLink);
            return (
              <Reveal
                key={plan.id}
                delay={i * 0.08}
                className={`p-7 sm:p-8 rounded-[32px] flex flex-col items-center text-center h-full ${
                  plan.featured
                    ? 'bg-brand-sage text-brand-shell shadow-lift md:-translate-y-4 md:py-12 ring-4 ring-brand-marigold/40'
                    : 'bg-brand-shell border border-brand-linen text-brand-espresso shadow-soft'
                }`}
              >
                {plan.featured && (
                  <span className="font-sans text-[0.7rem] font-bold uppercase tracking-widest bg-brand-marigold text-brand-espresso px-3 py-1 rounded-full mb-3">
                    {t('pricing.mostPopular')}
                  </span>
                )}

                <h3 className={`font-serif text-2xl mb-1 ${plan.featured ? 'text-brand-shell' : ''}`}>
                  {t(`pricing.plans.${plan.id}`)}
                </h3>
                {/* Age band mirrors the Stripe product name so checkout matches the site */}
                <p className={`font-sans text-sm mb-4 ${plan.featured ? 'text-brand-shell/80' : 'text-brand-muted'}`}>
                  {t('pricing.ages')} {plan.ages}
                </p>

                <p className="mb-1 flex items-baseline gap-1">
                  <span className="text-3xl font-serif">$</span>
                  <span className="text-5xl font-serif font-medium">{plan.amount}</span>
                  <span className={`font-sans text-sm ${plan.featured ? 'text-brand-shell/80' : 'text-brand-muted'}`}>
                    {t('pricing.perMonth')}
                  </span>
                </p>

                <p className={`font-sans text-sm font-semibold mb-7 ${plan.featured ? 'text-brand-marigold' : 'text-brand-terracottaInk'}`}>
                  {t('pricing.enrollmentFee')}
                </p>

                <p className={`font-sans text-sm mb-6 ${plan.featured ? 'text-brand-shell/85' : 'text-brand-muted'}`}>
                  {t('pricing.dueToday')}{' '}
                  <strong className="whitespace-nowrap">
                    ${plan.amount + practice.enrollmentFee}
                  </strong>
                </p>

                <Button
                  variant={plan.featured ? 'sun' : 'primary'}
                  className="w-full mt-auto"
                  href={broken ? undefined : plan.paymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t('pricing.plans.enroll')} — ${t(`pricing.plans.${plan.id}`)}, $${plan.amount}${t('pricing.perMonth')}`}
                >
                  {t('pricing.plans.enroll')}
                </Button>

                {/* Dev-only guard: never ship a button that cannot take money */}
                {broken && import.meta.env?.DEV && (
                  <span className="mt-3 font-sans text-xs text-brand-terracottaInk font-bold">
                    ⚠️ Not a buy.stripe.com link — customers cannot pay here.
                  </span>
                )}
              </Reveal>
            );
          })}
        </div>

        <p className="mt-10 text-center font-sans text-brand-muted text-sm max-w-2xl mx-auto">
          {t('pricing.enrollment')}
        </p>

        {/* Single-visit pricing lives on the existing Services page — no extra route */}
        <Reveal className="mt-12 max-w-3xl mx-auto">
          <div className="bg-brand-shell border border-brand-linen rounded-3xl p-6 sm:p-8 text-center shadow-soft">
            <h3 className="font-serif text-2xl mb-3 text-brand-espresso">
              {t('pricing.aLaCarte.title')}
            </h3>
            <p className="font-sans text-brand-muted mb-6 leading-relaxed">
              {t('pricing.aLaCarte.desc')}
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 min-h-tap px-6 rounded-full border-2 border-brand-espresso font-sans font-semibold text-brand-espresso hover:bg-brand-espresso hover:text-brand-cream transition-colors duration-400 ease-soft-ease"
            >
              {t('pricing.aLaCarte.cta')}
              <Icon name="ArrowRight" className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
