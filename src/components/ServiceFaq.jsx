import React from 'react';
import Icon from '../common/Icon';
import Reveal from './Reveal';
import { useLanguage } from '../context/LanguageContext';

export default function ServiceFaq({ faqItems }) {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-brand-cream" aria-labelledby="service-faq-heading">
      <div className="max-w-[760px] mx-auto px-6">
        <h2 id="service-faq-heading" className="text-3xl md:text-4xl mb-10 text-center">
          {t('services.detail.commonQuestions')}
        </h2>
        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <details className="group bg-brand-shell border border-brand-linen rounded-2xl shadow-soft overflow-hidden">
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none p-5 sm:p-6 min-h-tap font-sans font-semibold text-brand-espresso hover:bg-brand-creamDark/50 transition-colors">
                  <span className="text-lg leading-snug">{item.question}</span>
                  <span className="text-brand-terracottaInk shrink-0 mt-1 transition-transform duration-400 group-open:rotate-180">
                    <Icon name="ChevronDown" className="w-5 h-5" />
                  </span>
                </summary>
                <div className="px-5 sm:px-6 pb-6 -mt-1">
                  <p className="font-sans text-brand-muted leading-relaxed text-pretty">{item.answer}</p>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
