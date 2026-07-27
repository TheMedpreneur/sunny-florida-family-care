import React from 'react';
import Button from './Button';
import Reveal from './Reveal';
import { useLanguage } from '../context/LanguageContext';
import practice from '../data/practice';

export default function ServiceCta() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-brand-terracottaDeep relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-brand-marigold/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-cream/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" aria-hidden="true" />

      <div className="max-w-[700px] mx-auto px-6 text-center relative z-10">
        <Reveal>
          <h2 className="text-3xl md:text-5xl text-brand-cream mb-6 leading-tight text-balance">
            {t('services.detail.ctaTitle')}{' '}
            <span className="italic font-serif text-brand-marigoldLight">
              {t('services.detail.ctaTitleItalic')}
            </span>
          </h2>
          <p className="text-brand-cream font-sans text-lg mb-8 max-w-md mx-auto">
            {t('services.detail.ctaSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="sun"
              href={practice.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg px-10"
            >
              {t('hero.cta')}
            </Button>
            <Button
              href={practice.phoneHref}
              variant="ghost"
              className="text-brand-cream border-2 border-brand-cream/40 hover:bg-brand-cream/10 hover:text-brand-cream"
            >
              {t('services.detail.ctaSecondary')}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
