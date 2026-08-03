import React from 'react';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import Icon from '../common/Icon';
import Button from '../components/Button';
import { useLanguage } from '../context/LanguageContext';
import practice from '../data/practice';

export default function FAQ() {
  const { t } = useLanguage();
  const items = t('faq.items');
  const list = Array.isArray(items) ? items : [];

  return (
    <div className="bg-brand-cream">
      <SEO
        title={`${t('faq.title')} ${t('faq.titleItalic')} | ${practice.name}`}
        description={list[0]?.a || t('footer.desc')}
        url={`${practice.siteUrl}/faq`}
        keywords="direct primary care FAQ, no insurance doctor Jacksonville, telemedicine questions, preguntas frecuentes atencion medica"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: list.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
          })),
        }}
      />

      <section className="pt-14 pb-10 md:pt-20 md:pb-14">
        <div className="max-w-[760px] mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-balance">
            {t('faq.title')}{' '}
            <span className="italic text-brand-terracottaInk">{t('faq.titleItalic')}</span>
          </h1>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto px-6">
          <div className="space-y-3">
            {list.map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                {/*
                  Native <details> rather than JS state: it is keyboard and
                  screen-reader accessible for free, and the answer text is in
                  the DOM for search engines even while collapsed.
                */}
                <details className="group bg-brand-shell border border-brand-linen rounded-2xl shadow-soft overflow-hidden">
                  <summary className="flex items-start justify-between gap-4 cursor-pointer list-none p-5 sm:p-6 min-h-tap font-sans font-semibold text-brand-espresso hover:bg-brand-creamDark/50 transition-colors">
                    <span className="text-lg leading-snug">{item.q}</span>
                    <span className="text-brand-terracottaInk shrink-0 mt-1 transition-transform duration-400 group-open:rotate-180">
                      <Icon name="ChevronDown" className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="px-5 sm:px-6 pb-6 -mt-1">
                    <p className="font-sans text-brand-muted leading-relaxed text-pretty">{item.a}</p>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <p className="font-sans text-brand-muted mb-5">{t('hero.questions')}</p>
            <Button
              variant="primary"
              href={practice.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10"
            >
              {t('nav.book')}
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
