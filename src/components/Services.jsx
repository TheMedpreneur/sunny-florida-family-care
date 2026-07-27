import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const ServiceCard = ({ title, desc, tint, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -4, transition: { duration: 0.2 } }}
    className={`p-8 rounded-2xl border border-brand-espresso/5 shadow-soft hover:shadow-glow/20 transition-all duration-400 cursor-pointer ${tint}`}
  >
    <h3 className="text-2xl mb-3">{title}</h3>
    <p className="font-sans text-brand-espresso/70 leading-relaxed">
      {desc}
    </p>
  </motion.div>
);

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            {t('services.title')} <span className="italic text-brand-terracotta">{t('services.titleItalic')}</span>
          </h2>
          <p className="font-sans text-lg text-brand-espresso/70 max-w-2xl">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard 
            title={t('services.mobile.title')}
            desc={t('services.mobile.desc')}
            tint="bg-brand-tintPink"
            delay={0.1}
          />
          <ServiceCard 
            title={t('services.tele.title')}
            desc={t('services.tele.desc')}
            tint="bg-brand-tintBlue"
            delay={0.2}
          />
          <ServiceCard 
            title={t('services.member.title')}
            desc={t('services.member.desc')}
            tint="bg-brand-tintYellow"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}