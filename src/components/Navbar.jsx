import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import LanguageToggle from './LanguageToggle';
import Icon from '../common/Icon';
import { useLanguage } from '../context/LanguageContext';
import practice from '../data/practice';

export default function Navbar() {
  const location = useLocation();
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navLinks = [
    { to: '/', label: t('nav.story') },
    { to: '/team', label: t('nav.team') },
    { to: '/services', label: t('nav.services') },
  ];

  // Close the mobile sheet on route change so a tap never leaves it hanging open.
  React.useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  return (
    <nav
      className="sticky top-0 z-50 bg-brand-cream/95 backdrop-blur-md border-b border-brand-linen"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-20 md:h-28 flex items-center justify-between gap-3">
        {/* Logo — enlarged per Ana's request (7/16, item 4) */}
        <Link
          to="/"
          className="flex items-center shrink-0 group"
          aria-label={`${practice.name} — home`}
        >
          {/*
            The full logo is a 399KB PNG at 640×644, rendered here at 56–96px
            and again in the footer — on every page, before anything else can
            paint. The 256px WebP is 42KB and indistinguishable at this size.
            The PNG stays as the fallback and for social cards, which want it.

            (width/height also said 1155×1164, which the file has never been.
            The ratio was close enough to hide the mistake.)
          */}
          <picture>
            <source srcSet={practice.images.logoSm} type="image/webp" />
            <img
              src={practice.images.logo}
              alt={`${practice.name} logo`}
              className="h-14 sm:h-16 md:h-24 w-auto transition-transform duration-400 ease-soft-ease group-hover:scale-[1.03]"
              width="640"
              height="644"
              fetchPriority="high"
            />
          </picture>
          <span className="sr-only">{practice.name} — {practice.tagline}</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7 font-sans text-brand-muted">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              aria-current={location.pathname === link.to ? 'page' : undefined}
              className={`inline-flex items-center min-h-tap px-1 hover:text-brand-terracottaInk transition-colors ${
                location.pathname === link.to
                  ? 'text-brand-terracottaInk font-semibold'
                  : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
          <LanguageToggle />
        </div>

        {/* Desktop CTA */}
        <Button
          variant="primary"
          href={practice.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex shrink-0"
        >
          {t('nav.book')}
        </Button>

        {/*
          MOBILE CONTROLS
          Ana reported (7/18) that the Spanish toggle was missing on her phone —
          it only existed inside the collapsed hamburger menu. It now sits in
          the header bar itself, visible without opening anything.
        */}
        <div className="flex md:hidden items-center gap-1.5 shrink-0">
          <LanguageToggle compact />
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="min-h-tap min-w-tap flex items-center justify-center rounded-full text-brand-espresso hover:bg-brand-creamDark transition-colors"
            aria-label={mobileOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <Icon name={mobileOpen ? "X" : "Menu"} className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-brand-cream border-t border-brand-linen px-4 sm:px-6 py-4 font-sans shadow-soft"
        >
          <ul className="divide-y divide-brand-linen/70" role="list">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  aria-current={location.pathname === link.to ? 'page' : undefined}
                  className={`flex items-center min-h-tap text-lg transition-colors ${
                    location.pathname === link.to
                      ? 'text-brand-terracottaInk font-semibold'
                      : 'text-brand-espresso hover:text-brand-terracottaInk'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Button
            variant="primary"
            href={practice.calendly}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="w-full mt-5"
          >
            {t('nav.book')}
          </Button>
        </div>
      )}
    </nav>
  );
}
