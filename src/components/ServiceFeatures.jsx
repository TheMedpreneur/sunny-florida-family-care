import React from 'react';
import Icon from '../common/Icon';
import Reveal from './Reveal';
import { useLanguage } from '../context/LanguageContext';

export default function ServiceFeatures({ features }) {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-brand-cream" aria-labelledby="features-heading">
      <div className="max-w-[1000px] mx-auto px-6">
        <h2 id="features-heading" className="text-3xl md:text-4xl mb-10 text-center">
          {t('services.detail.whatsIncluded')}
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <Reveal
              key={i}
              delay={(i % 2) * 0.08}
              className="flex items-start gap-4 bg-brand-shell border border-brand-linen rounded-2xl p-6 shadow-soft h-full"
            >
              <span className="text-brand-sageInk shrink-0 mt-0.5">
                <Icon name="CheckCircle" className="w-6 h-6" />
              </span>
              <div>
                <h3 className="font-serif text-xl mb-1.5 text-brand-espresso">{f.title}</h3>
                <p className="font-sans text-brand-muted leading-relaxed">{f.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
