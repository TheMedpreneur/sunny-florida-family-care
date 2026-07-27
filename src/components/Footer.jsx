import React from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import { FiSun, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-espresso text-brand-cream pt-20 pb-10" role="contentinfo">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 text-brand-marigold mb-6">
              <SafeIcon icon={FiSun} className="w-6 h-6" aria-hidden="true" />
              <span className="font-serif text-2xl font-medium tracking-tight text-brand-cream">
                Sunny Florida <span className="italic opacity-80 text-lg">Family Care</span>
              </span>
            </div>
            <p className="font-sans text-brand-cream/70 max-w-xs">
              {t('footer.desc')}
            </p>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-brand-turquoise">{t('footer.visit')}</h4>
            <ul className="space-y-4 font-sans text-brand-cream/80" role="list">
              <li className="flex items-start gap-3">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 mt-0.5 text-brand-terracotta" aria-hidden="true" />
                <span>Jacksonville, FL<br />Serving Duval & St. Johns</span>
              </li>
              <li className="flex items-center gap-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-brand-terracotta" aria-hidden="true" />
                <a href="tel:9045550123" className="hover:text-brand-marigold transition-colors">(904) 555-0123</a>
              </li>
              <li className="flex items-center gap-3">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-brand-terracotta" aria-hidden="true" />
                <a href="mailto:hola@sunnyfamily.health" className="hover:text-brand-marigold transition-colors">hola@sunnyfamily.health</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-brand-turquoise">{t('footer.hours')}</h4>
            <ul className="space-y-2 font-sans text-brand-cream/80" role="list">
              <li className="flex justify-between">
                <span>{t('footer.monFri')}</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>{t('footer.sat')}</span>
                <span>9:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between text-brand-terracotta mt-2 italic">
                <span>{t('footer.walkins')}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-brand-turquoise">{t('footer.legal')}</h4>
            <nav aria-label="Legal pages">
              <ul className="space-y-3 font-sans text-brand-cream/80" role="list">
                <li><Link to="/faq" className="hover:text-brand-marigold transition-colors">{t('nav.faq')}</Link></li>
                <li><Link to="/terms" className="hover:text-brand-marigold transition-colors">{t('nav.terms')}</Link></li>
                <li><Link to="/privacy" className="hover:text-brand-marigold transition-colors">{t('nav.privacy')}</Link></li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="border-t border-brand-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-sans text-sm text-brand-cream/50">
          <p>© {new Date().getFullYear()} Sunny Florida Family Care. All rights reserved.</p>
          <p>{t('footer.designed')}</p>
        </div>
      </div>
    </footer>
  );
}