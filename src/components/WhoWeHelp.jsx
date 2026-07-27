import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import { FiSmile, FiUsers, FiActivity, FiGlobe } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

export default function WhoWeHelp() {
  const { t } = useLanguage();

  const groups = [
    { icon: FiSmile, title: t('whoWeHelp.kids.title'), desc: t('whoWeHelp.kids.desc') },
    { icon: FiUsers, title: t('whoWeHelp.adults.title'), desc: t('whoWeHelp.adults.desc') },
    { icon: FiActivity, title: t('whoWeHelp.seniors.title'), desc: t('whoWeHelp.seniors.desc') },
    { icon: FiGlobe, title: t('whoWeHelp.spanish.title'), desc: t('whoWeHelp.spanish.desc') }
  ];

  return (
    <section className="py-16 bg-brand-creamDark relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <span className="font-sans text-xs tracking-widest uppercase text-brand-sage font-bold mb-8 block">
          {t('whoWeHelp.title')}
        </span>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((group, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-cream p-6 rounded-3xl shadow-soft border border-brand-espresso/5 flex flex-col items-center text-center hover:-translate-y-1 transition-transform"
            >
              <div className="w-12 h-12 rounded-full bg-brand-marigold/20 flex items-center justify-center text-brand-terracotta mb-4">
                <SafeIcon icon={group.icon} className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl mb-2 text-brand-espresso">{group.title}</h3>
              <p className="font-sans text-sm text-brand-espresso/70 leading-relaxed">
                {group.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}