import React from 'react';
import Icon from '../common/Icon';
import Reveal from './Reveal';
import { useLanguage } from '../context/LanguageContext';

const GROUPS = [
  { icon: 'Smile',  key: 'kids' },
  { icon: 'Users',  key: 'adults' },
  { icon: 'Activity', key: 'seniors' },
  { icon: 'Globe',  key: 'spanish' },
];

export default function WhoWeHelp() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-brand-cream" aria-labelledby="who-we-help-heading">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h2
          id="who-we-help-heading"
          className="font-sans text-xs tracking-widest uppercase text-brand-sageInk font-bold mb-8"
        >
          {t('whoWeHelp.title')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {GROUPS.map((group, i) => (
            <Reveal
              key={group.key}
              delay={i * 0.08}
              className="bg-brand-shell p-6 rounded-3xl shadow-soft border border-brand-linen flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-lift transition-all duration-400 ease-soft-ease"
            >
              <span className="w-12 h-12 rounded-full bg-brand-marigold/25 flex items-center justify-center text-brand-terracottaInk mb-4">
                <Icon name={group.icon} className="w-6 h-6" />
              </span>
              <h3 className="font-serif text-xl mb-2 text-brand-espresso">
                {t(`whoWeHelp.${group.key}.title`)}
              </h3>
              <p className="font-sans text-sm text-brand-muted leading-relaxed">
                {t(`whoWeHelp.${group.key}.desc`)}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
