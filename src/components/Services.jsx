import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../common/Icon';
import Reveal from './Reveal';
import { useLanguage } from '../context/LanguageContext';

const CARDS = [
  { id: 'mobile', icon: 'Home',   tint: 'bg-brand-tintPink' },
  { id: 'tele',   icon: 'Video',  tint: 'bg-brand-tintBlue' },
  { id: 'member', icon: 'Shield', tint: 'bg-brand-tintYellow' },
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 md:py-24 bg-brand-cream">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-balance">
            {t('services.title')}{' '}
            <span className="italic text-brand-terracottaInk">{t('services.titleItalic')}</span>
          </h2>
          <p className="font-sans text-lg text-brand-muted max-w-2xl">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {CARDS.map((card, i) => (
            <Reveal key={card.id} delay={i * 0.1} className="h-full">
              <Link
                to={`/services/${card.id}`}
                className={`group flex flex-col h-full p-7 sm:p-8 rounded-2xl border border-brand-linen shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-400 ease-soft-ease ${card.tint}`}
              >
                <span className="w-11 h-11 rounded-full bg-brand-shell/80 flex items-center justify-center text-brand-terracottaInk mb-4">
                  <Icon name={card.icon} className="w-5 h-5" />
                </span>
                <h3 className="font-serif text-2xl mb-3 text-brand-espresso">
                  {t(`services.${card.id}.title`)}
                </h3>
                <p className="font-sans text-brand-muted leading-relaxed mb-5">
                  {t(`services.${card.id}.desc`)}
                </p>
                <span className="mt-auto font-sans font-semibold text-brand-terracottaInk inline-flex items-center gap-2">
                  {t('services.learnMore')}
                  <Icon
                    name="ArrowRight"
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
