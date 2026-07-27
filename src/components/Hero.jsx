import React from 'react';
import Button from './Button';
import Reveal from './Reveal';
import ContactCta from './ContactCta';
import { useLanguage } from '../context/LanguageContext';
import practice from '../data/practice';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-10 pb-20 overflow-hidden bg-brand-cream">
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text */}
        <Reveal
          from="left"
          rootMargin="0px"
          className="text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          {/*
            Ana's tagline is deliberately bilingual and runs long. As an inline
            span with rounded-full it fragmented into two clipped pills when it
            wrapped on a phone — inline-block keeps it a single box, and the
            softer radius makes a two-line wrap look intended rather than broken.
          */}
          <p className="mb-6 max-w-full">
            <span className="inline-block font-sans text-[0.68rem] sm:text-xs md:text-sm tracking-[0.12em] sm:tracking-widest uppercase text-brand-sageInk font-bold bg-brand-sage/10 px-4 py-2 rounded-2xl border border-brand-sage/25 leading-relaxed text-balance">
              {t('hero.location')}
            </span>
          </p>

          <h1 className="text-[2.75rem] leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl mb-5 text-brand-espresso text-balance">
            {t('hero.title')}{' '}
            <span className="italic text-brand-terracottaInk">{t('hero.titleItalic')}</span>.
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-brand-muted mb-8 font-sans leading-relaxed max-w-lg mx-auto lg:mx-0">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col items-center lg:items-start w-full max-w-md mx-auto lg:mx-0">
            <Button
              variant="primary"
              href={practice.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg sm:text-xl px-10 sm:px-12 py-4 w-full sm:w-auto mb-2"
            >
              {t('hero.cta')}
            </Button>
            <p className="text-sm font-sans text-brand-muted italic mb-6">
              {t('hero.ctaSubtext')}
            </p>
            <ContactCta />
          </div>
        </Reveal>

        {/* Ana's photo — arched crop */}
        <Reveal
          from="scale"
          delay={0.15}
          rootMargin="0px"
          className="relative mt-8 lg:mt-0 max-w-md mx-auto lg:max-w-none w-full"
        >
          <div className="absolute -inset-3 sm:-inset-4 bg-brand-marigold/25 arch-crop rotate-2 -z-10" aria-hidden="true" />
          <div className="relative aspect-[4/5] arch-crop overflow-hidden shadow-lift border-8 border-brand-shell bg-brand-creamDark">
            <picture>
              <source srcSet={practice.images.anaHeroWebp} type="image/webp" />
              <img
                src={practice.images.anaHero}
                alt={`${practice.provider.fullTitle} listening to a patient's heart during an unhurried visit`}
                className="w-full h-full object-cover object-top"
                width="1000"
                height="1250"
                fetchPriority="high"
              />
            </picture>

            {/* Trust marker */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 bg-brand-shell/97 backdrop-blur-md rounded-2xl shadow-soft">
              <div className="flex items-center gap-3 sm:gap-4">
                <img
                  src={practice.images.anaPortrait}
                  alt=""
                  aria-hidden="true"
                  className="w-12 h-12 shrink-0 rounded-full object-cover border-2 border-brand-terracotta"
                  width="48"
                  height="48"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <span className="font-hand text-lg sm:text-xl text-brand-terracottaInk leading-tight block mb-1">
                    &ldquo;{t('hero.doctorNote')}&rdquo;
                  </span>
                  <p className="text-[0.7rem] sm:text-xs font-sans text-brand-muted font-bold uppercase tracking-wider">
                    — {practice.provider.fullTitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
