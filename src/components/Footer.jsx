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
        {/*
          Four equal columns left the contact column ~220px of usable width
          after the icon, and "ana@sunnyfloridafamilycare.com" needs ~245px —
          so the real address wrapped and sat crammed against its neighbour.
          The demo placeholder was short enough to hide it.

          A 12-column track lets the columns take what they actually need:
          the contact details get four, the legal links — none longer than
          "Services & Pricing" — give up the two they were wasting.

          Twelve tracks only from lg up. At the 768px tablet width they divide
          too finely and the address wrapped again with 25px of clearance, so
          that range keeps the roomier two-column layout.
        */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-x-8 lg:gap-y-12 mb-14">
          <div className="lg:col-span-3">
            {/*
              Ana's logo carries deep-navy type that would vanish on the dark
              band, so it sits on a light chip here rather than being recolored.
            */}
            <Link to="/" className="inline-block bg-brand-shell rounded-2xl p-3 mb-5 shadow-soft">
              <picture>
                <source srcSet={practice.images.logoSm} type="image/webp" />
                <img
                  src={practice.images.logo}
                  alt={`${practice.name} logo`}
                  className="h-20 w-auto"
                  width="640"
                  height="644"
                  loading="lazy"
                />
              </picture>
            </Link>
            <p className="font-sans text-brand-cream/75 max-w-xs">
              {t('footer.desc')}
            </p>
          </div>

          <div className="lg:col-span-4">
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
                {/*
                  The real address is long enough to need a wrap, and break-all
                  chopped it mid-domain ("…familycare.c / om"). <wbr> gives the
                  browser the one break point a reader expects — after the @ —
                  so it wraps as "ana@" / "sunnyfloridafamilycare.com" instead.
                */}
                <a href={`mailto:${practice.email}`} className="hover:text-brand-marigoldLight transition-colors break-words min-h-tap flex items-center">
                  <span>
                    {practice.email.split('@')[0]}@<wbr />
                    {practice.email.split('@')[1]}
                  </span>
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

          {/*
            Posted clock hours came out 8/2 — Ana still holds another job, so a
            fixed schedule would be wrong more often than right, and a patient
            turned away by stale hours is worse than no hours at all. What
            replaces them is the thing she can actually promise: same-day
            availability, and an invitation to ask. openingHoursSpecification
            was dropped from the structured data in SEO.jsx at the same time,
            so Google cannot keep showing hours the site no longer claims.
          */}
          <div className="lg:col-span-3">
            <h2 className="font-serif text-xl mb-5 text-brand-marigoldLight">
              {t('footer.appointments')}
            </h2>
            <p className="font-sans text-brand-marigoldLight italic mb-4">
              {t('footer.sameDay')}
            </p>
            <p className="font-sans text-brand-cream/85 leading-relaxed">
              {t('footer.flexibleLead')}{' '}
              <a
                href={practice.phoneHref}
                className="font-semibold underline decoration-brand-marigoldLight/60 underline-offset-4 hover:text-brand-marigoldLight transition-colors"
              >
                {t('footer.flexibleCall')}
              </a>{' '}
              {t('footer.flexibleOr')}{' '}
              <a
                href={practice.smsHref}
                className="font-semibold underline decoration-brand-marigoldLight/60 underline-offset-4 hover:text-brand-marigoldLight transition-colors"
              >
                {t('footer.flexibleText')}
              </a>
              {t('footer.flexibleTail')}
            </p>
          </div>

          <div className="lg:col-span-2">
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
