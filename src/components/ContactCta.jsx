import React from 'react';
import Icon from '../common/Icon';
import { useLanguage } from '../context/LanguageContext';
import practice from '../data/practice';

export default function ContactCta() {
  const { t } = useLanguage();

  return (
    <div className="mt-4 flex flex-col items-center lg:items-start gap-3 bg-brand-shell p-4 rounded-2xl border border-brand-linen shadow-soft w-full sm:w-auto">
      <span className="font-sans text-brand-espresso text-sm font-bold tracking-wide">
        {t('hero.questions')}
      </span>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 w-full">
        <a
          href={practice.phoneHref}
          className="flex items-center gap-2 group min-h-tap"
          aria-label={`${t('hero.callUs')}: ${practice.phone}`}
        >
          <span className="w-9 h-9 shrink-0 rounded-full bg-brand-cream border border-brand-linen flex items-center justify-center text-brand-terracottaInk transition-transform group-hover:scale-110">
            <Icon name="Phone" className="w-4 h-4" aria-hidden="true" />
          </span>
          <span className="font-sans font-semibold text-brand-espresso group-hover:text-brand-terracottaInk transition-colors">
            {practice.phone}
          </span>
        </a>

        <a
          href={`mailto:${practice.email}`}
          className="flex items-center gap-2 group min-h-tap"
          aria-label={`${t('hero.emailUs')}: ${practice.email}`}
        >
          <span className="w-9 h-9 shrink-0 rounded-full bg-brand-cream border border-brand-linen flex items-center justify-center text-brand-terracottaInk transition-transform group-hover:scale-110">
            <Icon name="Mail" className="w-4 h-4" aria-hidden="true" />
          </span>
          <span className="font-sans font-semibold text-brand-espresso group-hover:text-brand-terracottaInk transition-colors">
            {t('hero.emailUs')}
          </span>
        </a>
      </div>
    </div>
  );
}
