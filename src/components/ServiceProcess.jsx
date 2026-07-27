import React from 'react';
import Reveal from './Reveal';
import { useLanguage } from '../context/LanguageContext';

export default function ServiceProcess({ steps }) {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-brand-creamDark border-y border-brand-linen" aria-labelledby="process-heading">
      <div className="max-w-[900px] mx-auto px-6">
        <h2 id="process-heading" className="text-3xl md:text-4xl mb-10 text-center">
          {t('services.detail.howItWorks')}
        </h2>
        <ol className="space-y-5" role="list">
          {steps.map((s, i) => (
            <Reveal
              as="li"
              key={i}
              delay={i * 0.06}
              className="flex items-start gap-5 bg-brand-shell border border-brand-linen rounded-2xl p-6 shadow-soft"
            >
              <span
                className="w-10 h-10 shrink-0 rounded-full bg-brand-terracotta text-brand-shell font-sans font-bold flex items-center justify-center"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="font-serif text-xl mb-1.5 text-brand-espresso">{s.title}</h3>
                <p className="font-sans text-brand-muted leading-relaxed">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
