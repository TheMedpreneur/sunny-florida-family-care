import React from 'react';
import { FiPhone, FiMail } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useLanguage } from '../context/LanguageContext';

export default function ContactCta() {
  const { t } = useLanguage();

  return (
    <div className="mt-4 flex flex-col items-center lg:items-start gap-3 bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-brand-marigold/20 shadow-sm w-full sm:w-auto">
      <span className="font-sans text-brand-espresso/80 text-sm font-bold tracking-wide">
        {t('hero.questions')}
      </span>
      
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <a href="tel:9045550123" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-brand-cream shadow-sm flex items-center justify-center text-brand-terracotta transition-transform group-hover:scale-110">
            <SafeIcon icon={FiPhone} className="w-4 h-4" />
          </div>
          <span className="font-sans font-semibold text-brand-espresso group-hover:text-brand-terracotta transition-colors">
            (904) 555-0123
          </span>
        </a>
        
        <a href="mailto:hola@sunnyfamily.health" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-brand-cream shadow-sm flex items-center justify-center text-brand-terracotta transition-transform group-hover:scale-110">
            <SafeIcon icon={FiMail} className="w-4 h-4" />
          </div>
          <span className="font-sans font-semibold text-brand-espresso group-hover:text-brand-terracotta transition-colors">
            Email Us
          </span>
        </a>
      </div>
    </div>
  );
}