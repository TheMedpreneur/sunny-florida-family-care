import React from 'react';
import Icon from '../common/Icon';
import Reveal from './Reveal';
import Button from './Button';
import { useLanguage } from '../context/LanguageContext';
import practice, { isBadStripeLink } from '../data/practice';
import {
  serviceGroups,
  rapidTests,
  telemedicineVisits,
  conditionIds,
  includedIds,
} from '../data/singleVisitPricing';

/**
 * Pay-now link for a single service, rendered only when that row has a real
 * customer-facing Stripe checkout URL. Today no row has one, so this renders
 * nowhere and the menu looks exactly as it always has — it switches on row by
 * row as Ana creates Payment Links. See the header of data/singleVisitPricing.js.
 */
function PayLink({ link, label }) {
  const { t } = useLanguage();
  if (isBadStripeLink(link)) return null;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 inline-flex items-center gap-1.5 min-h-tap px-4 rounded-full bg-brand-terracotta text-brand-shell font-sans text-sm font-semibold hover:bg-brand-terracottaDeep transition-colors duration-400 ease-soft-ease"
      aria-label={`${t('single.payNow')} — ${label}`}
    >
      {t('single.payNow')}
      <Icon name="ArrowRight" className="w-3.5 h-3.5" aria-hidden="true" />
    </a>
  );
}

/** Menu 1 — private services with a description under each name. */
function ServiceGroup({ group }) {
  const { t } = useLanguage();

  return (
    <div className="bg-brand-shell border border-brand-linen rounded-3xl p-6 sm:p-8 shadow-soft h-full">
      <h3 className="font-serif text-2xl mb-6 text-brand-espresso">
        {t(`single.groups.${group.id}`)}
      </h3>
      <dl className="divide-y divide-brand-linen">
        {group.items.map((item) => (
          <div key={item.id} className="py-4 first:pt-0 last:pb-0">
            <div className="flex items-baseline justify-between gap-4 mb-1">
              <dt className="font-sans font-semibold text-brand-espresso leading-snug">
                {t(`single.items.${item.id}.name`)}
              </dt>
              <dd className="font-sans font-bold text-brand-terracottaInk whitespace-nowrap tabular-nums shrink-0">
                {item.price === null ? (
                  <span className="text-sm font-semibold text-brand-sageInk">
                    {t('single.onRequest')}
                  </span>
                ) : item.from ? (
                  <>
                    <span className="text-xs font-semibold text-brand-muted mr-1">
                      {t('single.fromPrice')}
                    </span>
                    ${item.price}
                  </>
                ) : (
                  <>${item.price}</>
                )}
              </dd>
            </div>
            <p className="font-sans text-sm text-brand-muted leading-relaxed">
              {t(`single.items.${item.id}.desc`)}
            </p>
            <PayLink link={item.paymentLink} label={t(`single.items.${item.id}.name`)} />
          </div>
        ))}
      </dl>
    </div>
  );
}

/** Menu 2 — flat price lists. */
function PriceTable({ titleKey, rows, prefix }) {
  const { t } = useLanguage();

  return (
    <div className="bg-brand-shell border border-brand-linen rounded-3xl p-6 sm:p-8 shadow-soft h-full">
      <h3 className="font-serif text-2xl mb-6 text-brand-espresso">{t(titleKey)}</h3>
      <dl className="divide-y divide-brand-linen">
        {rows.map((row) => (
          <div key={row.id} className="py-3">
            <div className="flex items-baseline justify-between gap-4">
              <dt className="font-sans text-brand-espresso leading-snug">
                {t(`${prefix}.${row.id}`)}
              </dt>
              <dd className="font-sans font-bold text-brand-terracottaInk whitespace-nowrap tabular-nums shrink-0">
                ${row.price}
              </dd>
            </div>
            <PayLink link={row.paymentLink} label={t(`${prefix}.${row.id}`)} />
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function SingleVisitPricing() {
  const { t } = useLanguage();

  return (
    <section
      id="single-visit"
      /*
       * scroll-mt keeps the heading clear of the sticky Navbar when the
       * "See single-visit pricing" button jumps here — without it the
       * eyebrow and title land underneath the header.
       */
      className="py-20 md:py-24 bg-brand-creamDark border-y border-brand-linen scroll-mt-28 md:scroll-mt-32"
      aria-labelledby="single-visit-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          <span className="font-sans text-sm tracking-wider uppercase text-brand-sageInk font-bold mb-4 block">
            {t('single.badge')}
          </span>
          <h2 id="single-visit-heading" className="text-3xl sm:text-4xl md:text-5xl mb-5 text-balance">
            {t('single.title')}{' '}
            <span className="italic text-brand-terracottaInk">{t('single.titleItalic')}</span>
          </h2>
          <p className="font-sans text-lg text-brand-muted leading-relaxed">
            {t('single.subtitle')}
          </p>
        </div>

        {/* Menu 1 — private services */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
          {serviceGroups.map((group, i) => (
            <Reveal key={group.id} delay={(i % 2) * 0.08}>
              <ServiceGroup group={group} />
            </Reveal>
          ))}
        </div>

        {/* Menu 2 — rapid tests and telemedicine */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
          <Reveal from="left">
            <PriceTable titleKey="single.testsTitle" rows={rapidTests} prefix="single.tests" />
          </Reveal>
          <Reveal from="right" delay={0.08}>
            <PriceTable titleKey="single.visitsTitle" rows={telemedicineVisits} prefix="single.visits" />
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <Reveal>
            <div className="bg-brand-shell border border-brand-linen rounded-3xl p-6 sm:p-8 shadow-soft h-full">
              <h3 className="font-serif text-2xl mb-6 text-brand-espresso">
                {t('single.conditionsTitle')}
              </h3>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5" role="list">
                {conditionIds.map((id) => (
                  <li key={id} className="flex items-start gap-2.5">
                    <span className="text-brand-sageInk shrink-0 mt-1">
                      <Icon name="CheckCircle" className="w-4 h-4" />
                    </span>
                    <span className="font-sans text-sm text-brand-espresso leading-snug">
                      {t(`single.conditions.${id}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="bg-brand-sage text-brand-shell rounded-3xl p-6 sm:p-8 shadow-lift h-full flex flex-col">
              <h3 className="font-serif text-2xl mb-6 text-brand-shell">
                {t('single.includedTitle')}
              </h3>
              <ul className="space-y-3 mb-8" role="list">
                {includedIds.map((id) => (
                  <li key={id} className="flex items-start gap-2.5">
                    <span className="text-brand-marigold shrink-0 mt-0.5">
                      <Icon name="CheckCircle" className="w-5 h-5" />
                    </span>
                    <span className="font-sans text-brand-shell leading-snug">
                      {t(`single.included.${id}`)}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                variant="sun"
                href={practice.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-auto"
              >
                {t('nav.book')}
              </Button>
            </div>
          </Reveal>
        </div>

        {/*
          Safety notice, not fine print. Ana was explicit that telehealth starts
          at age 3 and that certain symptoms must be seen in person.
        */}
        <Reveal className="mt-8">
          <div
            className="flex items-start gap-4 bg-brand-tintPink border-2 border-brand-terracotta/40 rounded-2xl p-5 sm:p-6"
            role="note"
          >
            <span className="text-brand-terracottaInk shrink-0 mt-0.5">
              <Icon name="AlertTriangle" className="w-6 h-6" />
            </span>
            <div>
              <p className="font-sans font-bold text-brand-espresso mb-1">
                {t('single.ageNoticeTitle')}
              </p>
              <p className="font-sans text-sm text-brand-espresso leading-relaxed">
                {t('single.ageNotice')}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
