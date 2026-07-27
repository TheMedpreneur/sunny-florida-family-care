import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import SafeIcon from '../common/SafeIcon';
import { FiSun, FiGlobe, FiMenu, FiX } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navLinks = [
    { to: '/', label: t('nav.story') },
    { to: '/team', label: t('nav.team') },
    { to: '/services', label: t('nav.services') },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-brand-cream/90 backdrop-blur-md border-b border-brand-espresso/5" role="navigation" aria-label="Main navigation">
      <div className="max-w-[1200px] mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 text-brand-terracotta cursor-pointer group shrink-0" aria-label="Sunny Florida Family Care - Home">
          <SafeIcon icon={FiSun} className="w-10 h-10 transition-transform group-hover:rotate-45" aria-hidden="true" />
          <div className="flex flex-col">
            <span className="font-serif text-3xl font-medium tracking-tight text-brand-espresso leading-none">
              Sunny Florida
            </span>
            <span className="font-serif italic text-brand-espresso/80 text-lg leading-tight">
              Family Care
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-sans text-brand-espresso/80">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`hover:text-brand-terracotta transition-colors ${
                location.pathname === link.to ? 'text-brand-terracotta font-semibold' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Translation Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-sm font-semibold hover:text-brand-terracotta transition-colors bg-brand-espresso/5 px-4 py-2 rounded-full border border-brand-espresso/10"
            aria-label={language === 'en' ? 'Switch to Spanish' : 'Switch to English'}
          >
            <SafeIcon icon={FiGlobe} className="w-4 h-4" aria-hidden="true" />
            {language === 'en' ? 'ESPAÑOL' : 'ENGLISH'}
          </button>
        </div>

        {/* Desktop CTA */}
        <Button variant="primary" className="hidden sm:flex">
          {t('nav.book')}
        </Button>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-brand-espresso"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <SafeIcon icon={mobileOpen ? FiX : FiMenu} className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-cream border-t border-brand-espresso/5 px-6 py-6 space-y-4 font-sans">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block text-lg hover:text-brand-terracotta transition-colors ${
                location.pathname === link.to ? 'text-brand-terracotta font-semibold' : 'text-brand-espresso/80'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => { toggleLanguage(); setMobileOpen(false); }}
            className="flex items-center gap-2 text-sm font-semibold text-brand-espresso/80 hover:text-brand-terracotta transition-colors"
          >
            <SafeIcon icon={FiGlobe} className="w-4 h-4" aria-hidden="true" />
            {language === 'en' ? 'ESPAÑOL' : 'ENGLISH'}
          </button>
        </div>
      )}
    </nav>
  );
}