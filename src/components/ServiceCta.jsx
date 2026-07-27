import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

export default function ServiceCta({ t }) {
  return (
    <section className="py-20 bg-brand-terracotta relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-80 h-80 bg-brand-marigold/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 bg-brand-cream/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[700px] mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl text-brand-cream mb-6 leading-tight">
            {t('services.detail.ctaTitle')}{' '}
            <span className="italic font-serif text-brand-marigold">
              {t('services.detail.ctaTitleItalic')}
            </span>
          </h2>
          <p className="text-brand-cream/80 font-sans text-lg mb-8 max-w-md mx-auto">
            {t('services.detail.ctaSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              className="bg-brand-cream text-brand-terracotta hover:bg-white text-lg px-10 shadow-soft"
            >
              {t('hero.cta')}
            </Button>
            <Button variant="ghost" className="text-brand-cream border-2 border-brand-cream/30 hover:bg-brand-cream/10">
              {t('services.detail.ctaSecondary')}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}