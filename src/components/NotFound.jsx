import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import { useLanguage } from '../context/LanguageContext';
import practice from '../data/practice';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-brand-cream px-6 py-24">
      <SEO title={t('notFound.title')} description={t('notFound.desc')} noindex />
      <div className="text-center max-w-md">
        <img
          src={practice.images.mark}
          alt=""
          aria-hidden="true"
          className="w-20 h-20 mx-auto mb-6 opacity-80"
          width="512"
          height="512"
        />
        <h1 className="text-4xl md:text-5xl mb-4">{t('notFound.title')}</h1>
        <p className="font-sans text-brand-muted mb-8">{t('notFound.desc')}</p>
        <Link
          to="/"
          className="inline-flex items-center min-h-tap px-8 rounded-full bg-brand-terracotta text-brand-shell font-sans font-semibold hover:bg-brand-terracottaDeep transition-colors"
        >
          {t('notFound.cta')}
        </Link>
      </div>
    </section>
  );
}
