import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../common/Icon';
import Button from './Button';
import Reveal from './Reveal';
import { useLanguage } from '../context/LanguageContext';
import practice from '../data/practice';

export default function ServiceDetailHero({ title, titleItalic, subtitle, icon, tint }) {
  const { t } = useLanguage();

  return (
    <section className={`pt-8 pb-16 md:pt-12 md:pb-20 ${tint}`}>
      <div className="max-w-[1200px] mx-auto px-6">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 min-h-tap font-sans font-semibold text-brand-terracottaInk hover:gap-3 transition-all duration-400 mb-6"
        >
          <Icon name="ArrowLeft" className="w-4 h-4" />
          {t('services.backToServices')}
        </Link>

        <Reveal className="max-w-3xl">
          <span className="w-14 h-14 rounded-2xl bg-brand-shell flex items-center justify-center text-brand-terracottaInk mb-6 shadow-soft">
            <Icon name={icon} className="w-7 h-7" />
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-5 text-brand-espresso text-balance">
            {title} <span className="italic text-brand-terracottaInk">{titleItalic}</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-brand-espresso leading-relaxed mb-8 text-pretty">
            {subtitle}
          </p>
          <Button
            variant="primary"
            href={practice.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 w-full sm:w-auto"
          >
            {t('hero.cta')}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
