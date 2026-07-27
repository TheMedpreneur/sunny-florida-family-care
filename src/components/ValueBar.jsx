import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import { FiClock, FiShieldOff, FiHeart, FiDollarSign, FiUserCheck, FiMessageCircle } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

export default function ValueBar() {
  const { t } = useLanguage();

  const benefits = [
    { icon: FiClock, text: t('values.sameday') },
    { icon: FiShieldOff, text: t('values.noInsurance') },
    { icon: FiHeart, text: t('values.longer') },
    { icon: FiDollarSign, text: t('values.pricing') },
    { icon: FiUserCheck, text: t('values.personal') },
    { icon: FiMessageCircle, text: t('values.spanish') }
  ];

  return (
    <div className="relative py-8 bg-brand-cream border-y border-brand-espresso/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-x-8 gap-y-6">
          {benefits.map((b, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 text-brand-espresso group"
            >
              <div className="text-brand-terracotta group-hover:scale-110 transition-transform">
                <SafeIcon icon={b.icon} className="w-5 h-5" />
              </div>
              <span className="font-sans font-medium text-sm leading-tight max-w-[140px]">
                {b.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}