import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import ContactCta from './ContactCta';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-10 pb-20 overflow-hidden bg-brand-cream">
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <div className="inline-block mb-6 relative">
            <span className="font-sans text-xs md:text-sm tracking-widest uppercase text-brand-sage font-bold bg-brand-sage/10 px-4 py-1.5 rounded-full border border-brand-sage/20">
              {t('hero.location')}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-5 text-brand-espresso">
            {t('hero.title')}{' '}
            <span className="italic text-brand-terracotta">{t('hero.titleItalic')}</span>.
          </h1>

          <p className="text-xl md:text-2xl text-brand-espresso/80 mb-8 font-sans leading-relaxed max-w-lg mx-auto lg:mx-0">
            {t('hero.subtitle')}
          </p>

          {/* Unified CTA Block */}
          <div className="flex flex-col items-center lg:items-start w-full max-w-md mx-auto lg:mx-0">
            <Button variant="primary" className="text-xl px-12 py-4 w-full md:w-auto mb-2 shadow-glow">
              {t('hero.cta')}
            </Button>
            <p className="text-sm font-sans text-brand-espresso/60 italic mb-6">
              {t('hero.ctaSubtext')}
            </p>
            <ContactCta />
          </div>
        </motion.div>

        {/* Arched Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mt-8 lg:mt-0"
        >
          <div className="absolute -inset-4 bg-brand-marigold/20 arch-crop rotate-2 -z-10" />
          <div className="relative aspect-[4/5] arch-crop overflow-hidden shadow-2xl border-8 border-white bg-brand-creamDark">
            <img
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop&fm=webp"
              alt="Sunny Florida Family Care team providing warm, compassionate healthcare"
              className="w-full h-full object-cover"
              width="800"
              height="1000"
              fetchPriority="high"
            />

            {/* Trust Marker on Image */}
            <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/95 backdrop-blur-md rounded-2xl shadow-soft">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71f153678f?q=75&w=96&auto=format&fit=crop&fm=webp"
                  alt="Dr. Elena Santiago, Lead Physician"
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-terracotta"
                  width="48"
                  height="48"
                />
                <div>
                  <span className="font-hand text-xl text-brand-terracotta leading-none block mb-1">
                    "{t('hero.doctorNote')}"
                  </span>
                  <p className="text-xs font-sans text-brand-espresso/70 font-bold uppercase tracking-wider">
                    — {t('hero.doctorName')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}