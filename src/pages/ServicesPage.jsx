import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Icon from '../common/Icon';
import Reveal from './../components/Reveal';
import Pricing from '../components/Pricing';
import SingleVisitPricing from '../components/SingleVisitPricing';
import FinalCta from '../components/FinalCta';
import { useLanguage } from '../context/LanguageContext';
import { serviceDetails, serviceSlugs } from '../data/serviceDetails';
import practice from '../data/practice';

export default function ServicesPage() {
  const { t, language } = useLanguage();

  return (
    <div className="bg-brand-cream">
      <SEO
        title={`${t('nav.services')} | ${practice.name}`}
        description={t('services.subtitle')}
        url={`${practice.siteUrl}/services`}
        keywords="direct primary care pricing Jacksonville, telemedicine cost, mobile visit, rapid strep test, bilingual nurse practitioner, precios consulta medica Jacksonville"
      />

      <section className="pt-14 pb-12 md:pt-20 md:pb-16">
        <div className="max-w-[1200px] mx-auto px-6 text-center max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-5 text-balance">
            {t('services.title')}{' '}
            <span className="italic text-brand-terracottaInk">{t('services.titleItalic')}</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-brand-muted leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-20" aria-label={t('services.titleItalic')}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {serviceSlugs.map((slug, i) => {
              const svc = serviceDetails[slug];
              return (
                <Reveal key={slug} delay={(i % 3) * 0.08} className="h-full">
                  <Link
                    to={`/services/${slug}`}
                    className={`group flex flex-col h-full p-7 sm:p-8 rounded-[32px] border border-brand-linen shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-400 ease-soft-ease ${svc.tint}`}
                  >
                    <span className="w-12 h-12 rounded-2xl bg-brand-shell/85 flex items-center justify-center text-brand-terracottaInk mb-5">
                      <Icon name={svc.icon} className="w-6 h-6" />
                    </span>
                    <h2 className="font-serif text-2xl md:text-3xl mb-3 text-brand-espresso">
                      {t(`services.${slug}.title`)}{' '}
                      <span className="italic">{t(`services.${slug}.titleItalic`)}</span>
                    </h2>
                    <p className="font-sans font-semibold text-brand-espresso mb-3">
                      {t(`services.${slug}.desc`)}
                    </p>
                    <p className="font-sans text-brand-muted leading-relaxed mb-6">
                      {t(`services.${slug}.detail`)}
                    </p>
                    <span className="mt-auto font-sans font-semibold text-brand-terracottaInk inline-flex items-center gap-2">
                      {t('services.learnMore')}
                      <Icon
                        name={language === 'ar' ? 'ArrowLeft' : 'ArrowRight'}
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Memberships, then the full single-visit menu — no separate route */}
      <Pricing />
      <SingleVisitPricing />
      <FinalCta />
    </div>
  );
}
