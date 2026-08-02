import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Reveal from './Reveal';
import Icon from '../common/Icon';
import { useLanguage } from '../context/LanguageContext';
import practice, { isBadStripeLink } from '../data/practice';

export default function Pricing() {
  const { t } = useLanguage();

  /**
   * Two of the inclusion lines carry a figure. Those figures live in
   * data/practice.js, never in the translated copy, so English and Spanish
   * can never end up advertising different numbers — the same rule the
   * single-visit menu already follows for its prices. Splitting each line
   * into before/after fragments keeps the word order natural in both.
   */
  const includeLabel = (id) => {
    if (id === 'visits') {
      return `${t('pricing.includes.visitsBefore')} ${practice.visitsPerMonth} ${t('pricing.includes.visitsAfter')}`;
    }
    if (id === 'afterHours') {
      return `${t('pricing.includes.afterHoursBefore')} $${practice.afterHours.memberAddOn} ${t('pricing.includes.afterHoursAfter')}`;
    }
    return t(`pricing.includes.${id}`);
  };

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

        {/*
          Ana, 8/2: patients could not see what a membership actually bought
          until after they had enrolled. Every tier includes the same things,
          so this is one shared list — and it sits ABOVE the tiers deliberately,
          so it is read before the price and before the Enroll button, not
          after. The visit count is repeated inside each card for the same
          reason.
        */}
        <Reveal className="max-w-5xl mx-auto mb-8 md:mb-10">
          <div className="bg-brand-shell border border-brand-linen rounded-[32px] p-6 sm:p-8 shadow-soft">
            <h3 className="font-serif text-2xl mb-6 text-brand-espresso text-center">
              {t('pricing.includes.title')}
            </h3>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3.5 max-w-3xl mx-auto" role="list">
              {practice.membershipIncludes.map((id) => (
                <li key={id} className="flex items-start gap-2.5">
                  <span className="text-brand-sageInk shrink-0 mt-0.5">
                    <Icon name="CheckCircle" className="w-5 h-5" />
                  </span>
                  <span className="font-sans text-brand-espresso leading-snug">
                    {includeLabel(id)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

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
                <p className={`font-sans text-sm mb-4 ${plan.featured ? 'text-brand-shell' : 'text-brand-muted'}`}>
                  {t('pricing.ages')} {plan.ages}
                </p>

                <p className="mb-1 flex items-baseline gap-1">
                  <span className="text-3xl font-serif">$</span>
                  <span className="text-5xl font-serif font-medium">{plan.amount}</span>
                  <span className={`font-sans text-sm ${plan.featured ? 'text-brand-shell' : 'text-brand-muted'}`}>
                    {t('pricing.perMonth')}
                  </span>
                </p>

                {/*
                  marigold on the sage card is 2.28:1 — the palette's own rule
                  against gold text, applied to a mid-dark surface rather than
                  a light one. tintYellow keeps the warm accent at 4.65:1.
                */}
                <p className={`font-sans text-sm font-semibold mb-7 ${plan.featured ? 'text-brand-tintYellow' : 'text-brand-terracottaInk'}`}>
                  {t('pricing.enrollmentFee')}
                </p>

                <p className={`font-sans text-sm mb-6 ${plan.featured ? 'text-brand-shell' : 'text-brand-muted'}`}>
                  {t('pricing.dueToday')}{' '}
                  <strong className="whitespace-nowrap">
                    ${plan.amount + practice.enrollmentFee}
                  </strong>
                </p>

                {/*
                  The one number every patient asks about, repeated on the card
                  so it is the last thing read before the Enroll button. mt-auto
                  moved here from the Button so this stays glued to it.
                */}
                {/*
                  A translucent light chip on the sage card composited to
                  ~#68805F, dropping cream text to 3.95:1. The solid deeper
                  sage reads as the same inset and clears AAA at 7.8:1.
                */}
                <span
                  className={`font-sans text-sm font-semibold leading-snug mb-4 mt-auto px-3 py-2 rounded-2xl ${
                    plan.featured
                      ? 'bg-brand-sageInk text-brand-shell'
                      : 'bg-brand-sage/10 text-brand-sageInk'
                  }`}
                >
                  {t('pricing.includes.visitsBefore')} {practice.visitsPerMonth}{' '}
                  {t('pricing.includes.visitsAfter')}
                </span>

                <Button
                  variant={plan.featured ? 'sun' : 'primary'}
                  className="w-full"
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

        {/*
          After-hours is a paid add-on, not part of the membership, so it is
          stated as its own block rather than buried in the inclusion list —
          and the terms sit with the price, where someone deciding can read
          them, instead of appearing for the first time at the bill.
        */}
        <Reveal className="mt-12 max-w-3xl mx-auto">
          <div className="bg-brand-shell border border-brand-linen rounded-3xl p-6 sm:p-8 shadow-soft">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 pb-5 mb-5 border-b border-brand-linen">
              <div>
                <h3 className="font-serif text-2xl text-brand-espresso">
                  {t('pricing.afterHours.title')}
                </h3>
                <p className="font-sans text-sm text-brand-muted mt-1">
                  {t('pricing.afterHours.window')} {practice.afterHours.cutoff}
                </p>
              </div>
              <p className="font-sans font-bold text-brand-terracottaInk whitespace-nowrap tabular-nums">
                <span className="text-sm font-semibold text-brand-muted mr-1">
                  {t('pricing.afterHours.addOn')}
                </span>
                ${practice.afterHours.memberAddOn}
              </p>
            </div>

            <p className="font-sans text-sm text-brand-espresso leading-relaxed mb-4">
              {t('pricing.afterHours.notice')}
            </p>

            <div
              className="flex items-start gap-3 bg-brand-tintPink border-2 border-brand-terracotta/40 rounded-2xl p-4"
              role="note"
            >
              <span className="text-brand-terracottaInk shrink-0 mt-0.5">
                <Icon name="AlertTriangle" className="w-5 h-5" />
              </span>
              <p className="font-sans text-sm text-brand-espresso leading-relaxed font-medium">
                {t('pricing.afterHours.emergency')}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Single-visit pricing lives on the existing Services page — no extra route */}
        <Reveal className="mt-8 max-w-3xl mx-auto">
          <div className="bg-brand-shell border border-brand-linen rounded-3xl p-6 sm:p-8 text-center shadow-soft">
            <h3 className="font-serif text-2xl mb-3 text-brand-espresso">
              {t('pricing.aLaCarte.title')}
            </h3>
            <p className="font-sans text-brand-muted mb-6 leading-relaxed">
              {t('pricing.aLaCarte.desc')}
            </p>
            {/*
              The hash is what makes this button work. It used to point at
              plain /services: from the homepage that dropped the reader on the
              services hero two sections above the menu, and on /services
              itself — where this block also renders — the pathname never
              changed, so nothing happened at all. ScrollManager in App.jsx
              handles the anchor, including the same-page case.
            */}
            <Link
              to="/services#single-visit"
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
