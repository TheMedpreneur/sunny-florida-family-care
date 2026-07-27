import React from 'react';
import Reveal from './Reveal';
import { useLanguage } from '../context/LanguageContext';
import Icon from '../common/Icon';
import practice from '../data/practice';

export default function Philosophy() {
  const { t } = useLanguage();
  const bullets = t('philosophy.bullets');

  return (
    <section id="story" className="py-20 md:py-24 bg-brand-cream relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 md:gap-16 items-center">
          <Reveal from="left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 text-balance">
              {t('philosophy.title')}{' '}
              <span className="italic text-brand-sageInk">{t('philosophy.titleItalic')}</span>
            </h2>

            <div className="space-y-4 text-lg font-sans text-brand-muted leading-relaxed mb-10">
              <p className="font-semibold text-brand-terracottaInk">{t('philosophy.p1')}</p>
              <p>{t('philosophy.p2')}</p>
            </div>

            <div className="bg-brand-shell p-6 sm:p-8 rounded-3xl border border-brand-linen shadow-soft">
              <h3 className="font-sans font-bold text-brand-espresso mb-6 uppercase tracking-wider text-sm">
                {t('philosophy.trustTitle')}
              </h3>
              <ul className="space-y-4" role="list">
                {Array.isArray(bullets) && bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="w-5 h-5 text-brand-sageInk shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="font-sans text-brand-espresso font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal from="scale" delay={0.12} className="relative mb-16 md:mb-0">
            <div className="aspect-square arch-crop-reverse overflow-hidden shadow-lift border-4 border-brand-marigold/40">
              <picture>
                <source srcSet={practice.images.anaCareWebp} type="image/webp" />
                <img
                  src={practice.images.anaCare}
                  alt={`${practice.provider.fullTitle} taking time with a patient in an unhurried visit`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="1200"
                  height="800"
                />
              </picture>
            </div>

            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 md:-bottom-8 md:-left-10 bg-brand-terracottaDeep text-brand-cream p-5 sm:p-6 rounded-2xl shadow-lift w-[88%] sm:max-w-[300px] rotate-[-2deg]">
              <p className="font-hand text-xl sm:text-2xl leading-tight mb-2">
                &ldquo;{t('philosophy.quote')}&rdquo;
              </p>
              <p className="font-sans text-[0.7rem] uppercase tracking-widest font-bold text-brand-marigoldLight">
                — {practice.provider.fullTitle}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
