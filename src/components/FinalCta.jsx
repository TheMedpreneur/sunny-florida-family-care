import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { useLanguage } from '../context/LanguageContext';

export default function FinalCta() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-brand-terracotta relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-marigold/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-cream/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl text-brand-cream mb-10 leading-tight">
            {t('finalCta.title')} <br/>
            <span className="italic font-serif text-brand-marigold">{t('finalCta.titleItalic')}</span>
          </h2>
          
          <div className="flex flex-col items-center gap-4">
            <Button variant="primary" className="bg-brand-cream text-brand-terracotta hover:bg-white text-xl px-12 py-5 shadow-soft hover:shadow-glow w-full sm:w-auto">
              {t('hero.cta')}
            </Button>
            <p className="text-brand-cream/80 font-sans font-medium mt-2">
              {t('finalCta.contact')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}