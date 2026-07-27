import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import SafeIcon from '../common/SafeIcon';
import { FiCheckCircle } from 'react-icons/fi';

export default function Philosophy() {
  const { t } = useLanguage();
  const bullets = t('philosophy.bullets') || [];

  return (
    <section id="story" className="py-24 bg-brand-cream relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Trust Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">
              {t('philosophy.title')}{' '}
              <span className="italic text-brand-sage">{t('philosophy.titleItalic')}</span>
            </h2>

            <div className="space-y-4 text-lg font-sans text-brand-espresso/80 leading-relaxed mb-10">
              <p className="font-semibold text-brand-terracotta">{t('philosophy.p1')}</p>
              <p>{t('philosophy.p2')}</p>
            </div>

            <div className="bg-brand-sage/5 p-8 rounded-3xl border border-brand-sage/20">
              <h3 className="font-sans font-bold text-brand-espresso mb-6 uppercase tracking-wider text-sm">
                {t('philosophy.trustTitle')}
              </h3>
              <ul className="space-y-4" role="list">
                {Array.isArray(bullets) && bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-brand-sage shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="font-sans text-brand-espresso/90 font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Image & Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square arch-crop-reverse overflow-hidden shadow-2xl border-4 border-brand-marigold/30">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=75&w=700&auto=format&fit=crop&fm=webp"
                alt="Doctor providing personalized, compassionate care to a patient"
                className="w-full h-full object-cover"
                loading="lazy"
                width="700"
                height="700"
              />
            </div>

            {/* Handwritten overlay quote */}
            <div className="absolute -bottom-8 -left-8 md:-left-12 bg-brand-terracotta text-brand-cream p-6 rounded-2xl shadow-glow max-w-[280px] rotate-[-2deg]">
              <p className="font-hand text-2xl leading-tight mb-2">"{t('philosophy.quote')}"</p>
              <p className="font-sans text-xs uppercase tracking-widest font-bold opacity-80">
                — {t('philosophy.quoteName')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}