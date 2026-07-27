import React from 'react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import Icon from '../common/Icon';
import { useLanguage } from '../context/LanguageContext';
import practice from '../data/practice';

const VALUE_ICONS = ['Clock', 'UserCheck', 'Globe', 'MessageCircle'];

export default function CareTeam() {
  const { t } = useLanguage();
  const bio = t('team.bio');
  const values = t('team.values');

  return (
    <div className="bg-brand-cream">
      <SEO
        title={`${practice.provider.fullTitle} | ${practice.name}`}
        description={t('team.intro')}
        url={`${practice.siteUrl}/#/team`}
        keywords="Ana Adamski FNP-C, nurse practitioner Jacksonville, bilingual nurse practitioner, Spanish speaking provider Jacksonville, enfermera practicante Jacksonville"
      />

      {/* Intro */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <Reveal from="left">
              <span className="font-sans text-xs tracking-widest uppercase text-brand-sageInk font-bold mb-4 block">
                {t('team.badge')}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl mb-3 text-balance">
                {t('team.title')}{' '}
                <span className="italic text-brand-terracottaInk">{t('team.titleItalic')}</span>
              </h1>
              <p className="font-serif text-xl md:text-2xl text-brand-sageInk mb-6">
                {practice.provider.fullTitle} — {t('team.role')}
              </p>
              <p className="font-sans text-lg text-brand-muted leading-relaxed">
                {t('team.intro')}
              </p>
            </Reveal>

            <Reveal from="right" delay={0.1} className="relative max-w-md mx-auto md:max-w-none w-full">
              <div className="absolute -inset-3 bg-brand-sage/20 arch-crop -rotate-2 -z-10" aria-hidden="true" />
              <div className="aspect-[4/5] arch-crop overflow-hidden shadow-lift border-8 border-brand-shell">
                <picture>
                  <source srcSet={practice.images.anaHeroWebp} type="image/webp" />
                  <img
                    src={practice.images.anaHero}
                    alt={`${practice.provider.fullTitle}, Family Nurse Practitioner, with a patient`}
                    className="w-full h-full object-cover object-top"
                    width="1000"
                    height="1250"
                    fetchPriority="high"
                  />
                </picture>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 md:py-20 bg-brand-creamDark border-y border-brand-linen">
        <div className="max-w-[760px] mx-auto px-6">
          <Reveal>
            <div className="space-y-6 font-sans text-lg text-brand-espresso leading-relaxed text-pretty">
              {Array.isArray(bio) && bio.map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-16 md:py-24" aria-labelledby="expect-heading">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 id="expect-heading" className="text-3xl sm:text-4xl md:text-5xl mb-12 text-center text-balance">
            {t('team.valuesTitle')}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.isArray(values) && values.map((v, i) => (
              <Reveal
                key={i}
                delay={i * 0.08}
                className="bg-brand-shell border border-brand-linen rounded-3xl p-6 shadow-soft h-full"
              >
                <span className="w-11 h-11 rounded-full bg-brand-marigold/25 flex items-center justify-center text-brand-terracottaInk mb-4">
                  <Icon name={VALUE_ICONS[i] || 'Heart'} className="w-5 h-5" />
                </span>
                <h3 className="font-serif text-xl mb-2 text-brand-espresso">{v.title}</h3>
                <p className="font-sans text-brand-muted leading-relaxed">{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-16 md:py-20 bg-brand-espresso text-brand-cream">
        <div className="max-w-[760px] mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-brand-marigoldLight">
              {t('team.promiseTitle')}
            </h2>
            <p className="font-sans text-lg md:text-xl leading-relaxed text-brand-cream mb-10 text-pretty">
              {t('team.promise')}
            </p>
            <Button
              variant="sun"
              href={practice.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 text-lg"
            >
              {t('team.cta')}
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
