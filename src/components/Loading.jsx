import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Loading() {
  const { t } = useLanguage();

  return (
    <div
      className="min-h-[60vh] flex flex-col items-center justify-center bg-brand-cream"
      role="status"
      aria-live="polite"
    >
      <span className="w-12 h-12 rounded-full border-4 border-brand-marigold/40 border-t-brand-terracotta animate-spin" />
      <p className="mt-4 font-sans text-brand-muted text-sm tracking-wide">
        {t('loading')}…
      </p>
    </div>
  );
}
