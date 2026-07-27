import React from 'react';
import Icon from '../common/Icon';
import { useLanguage } from '../context/LanguageContext';

/*
 * One shared language control so the header, mobile bar and footer can never
 * drift apart again. Ana reported the toggle was invisible on her phone
 * (7/18) because it lived only inside the collapsed hamburger menu.
 *
 * `compact` renders the short form (ES / EN) for the tight mobile header;
 * both variants meet the 44px minimum tap target.
 */
export default function LanguageToggle({ compact = false, className = '' }) {
  const { language, toggleLanguage, otherLanguageLabel, otherLanguageCode } = useLanguage();

  const aria =
    language === 'en'
      ? 'Cambiar a español — switch to Spanish'
      : 'Switch to English — cambiar a inglés';

  if (compact) {
    return (
      <button
        type="button"
        onClick={toggleLanguage}
        aria-label={aria}
        lang={otherLanguageCode}
        className={`min-h-tap min-w-tap px-3 flex items-center justify-center gap-1.5 rounded-full
          bg-brand-espresso text-brand-cream font-sans text-sm font-bold tracking-wide
          active:scale-95 transition-transform ${className}`}
      >
        <Icon name="Globe" className="w-4 h-4" aria-hidden="true" />
        {otherLanguageCode.toUpperCase()}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={aria}
      lang={otherLanguageCode}
      className={`min-h-tap flex items-center gap-2 px-4 rounded-full
        bg-brand-espresso text-brand-cream font-sans text-sm font-bold tracking-wide
        hover:bg-brand-bark active:scale-95 transition-all duration-400 ease-soft-ease ${className}`}
    >
      <Icon name="Globe" className="w-4 h-4" aria-hidden="true" />
      {otherLanguageLabel}
    </button>
  );
}
