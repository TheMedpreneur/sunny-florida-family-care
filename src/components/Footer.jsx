import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../common/Icon';
import { useLanguage } from '../context/LanguageContext';
import practice from '../data/practice';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-espresso text-brand-cream pt-16 md:pt-20 pb-10" role="contentinfo">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-14">
          <div className="md:col-span-1">
            {/*
              Ana's logo carries deep-navy type that would vanish on the dark
              band, so it sits on a light chip here rather than being recolored.
            */}
            <Link to="/" className="inline-block bg-brand-shell rounded-2xl p-3 mb-5 shadow-soft">
              <img
                src={practice.images.logo}
                alt={`${practice.name} logo`}
                className="h-20 w-auto"
                width="1155"
                height="1164"
                loading="lazy"
              />
            </Link>
            <p className="font-sans text-brand-cream/75 max-w-xs">
              {t('footer.desc')}
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl mb-5 text-brand-marigoldLight">{t('footer.visit')}</h2>
            <ul className="space-y-4 font-sans text-brand-cream/85" role="list">
              <li className="flex items-start gap-3">
                <Icon name="MapPin" className="w-5 h-5 mt-0.5 text-brand-marigoldLight shrink-0" aria-hidden="true" />
                <span>{practice.serviceArea}</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Phone" className="w-5 h-5 text-brand-marigoldLight shrink-0" aria-hidden="true" />
                <a href={practice.phoneHref} className="hover:text-brand-marigoldLight transition-colors min-h-tap flex items-center">
                  {practice.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Mail" className="w-5 h-5 text-brand-marigoldLight shrink-0" aria-hidden="true" />
                <a href={`mailto:${practice.email}`} className="hover:text-brand-marigoldLight transition-colors break-all min-h-tap flex items-center">
                  {practice.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Calendar" className="w-5 h-5 text-brand-marigoldLight shrink-0" aria-hidden="true" />
                <a
                  href={practice.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-marigoldLight transition-colors min-h-tap flex items-center font-semibold"
                >
                  {t('nav.book')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl mb-5 text-brand-marigoldLight">{t('footer.hours')}</h2>
            <ul className="space-y-2 font-sans text-brand-cream/85" role="list">
              <li className="flex justify-between gap-4">
                <span>{t('footer.monFri')}</span>
                <span className="text-right whitespace-nowrap">{practice.hours.monFri}</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>{t('footer.sat')}</span>
                <span className="text-right whitespace-nowrap">{practice.hours.sat}</span>
              </li>
              <li className="text-brand-marigoldLight mt-3 italic">
                {t('footer.walkins')}
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl mb-5 text-brand-marigoldLight">{t('footer.legal')}</h2>
            <nav aria-label={t('footer.legal')}>
              <ul className="space-y-1 font-sans text-brand-cream/85" role="list">
                <li><Link to="/services" className="hover:text-brand-marigoldLight transition-colors min-h-tap flex items-center">{t('nav.services')}</Link></li>
                <li><Link to="/faq" className="hover:text-brand-marigoldLight transition-colors min-h-tap flex items-center">{t('nav.faq')}</Link></li>
                <li><Link to="/terms" className="hover:text-brand-marigoldLight transition-colors min-h-tap flex items-center">{t('nav.terms')}</Link></li>
                <li><Link to="/privacy" className="hover:text-brand-marigoldLight transition-colors min-h-tap flex items-center">{t('nav.privacy')}</Link></li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="border-t border-brand-cream/15 pt-8 space-y-4 font-sans text-sm text-brand-cream/60">
          <p className="max-w-3xl leading-relaxed">{t('footer.disclaimer')}</p>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
            <p>&copy; {new Date().getFullYear()} {practice.legalName}. {t('footer.rights')}</p>
            <p>{t('footer.designed')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
