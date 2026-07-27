import React from 'react';
import Reveal from './Reveal';
import Button from './Button';
import { useLanguage } from '../context/LanguageContext';
import practice from '../data/practice';

export default function FinalCta() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-24 bg-brand-terracottaDeep relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-marigold/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-cream/15 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" aria-hidden="true" />

      <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl md:text-6xl text-brand-cream mb-8 md:mb-10 leading-tight text-balance">
            {t('finalCta.title')}{' '}
            <span className="italic font-serif text-brand-marigoldLight block sm:inline">
              {t('finalCta.titleItalic')}
            </span>
          </h2>

          <div className="flex flex-col items-center gap-4">
            <Button
              variant="sun"
              href={practice.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg sm:text-xl px-10 sm:px-12 py-5 w-full sm:w-auto"
            >
              {t('hero.cta')}
            </Button>
            <p className="text-brand-cream font-sans font-medium mt-2 flex flex-wrap items-center justify-center gap-x-2">
              <span>{t('finalCta.contact')}</span>
              <a
                href={practice.phoneHref}
                className="inline-flex items-center min-h-tap px-2 -mx-2 rounded-lg font-semibold underline decoration-brand-marigoldLight underline-offset-4 hover:text-brand-marigoldLight transition-colors whitespace-nowrap"
              >
                {practice.phone}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
