import React, { Suspense, lazy, useEffect } from 'react';
// BrowserRouter, not HashRouter. Google discards the fragment when
// canonicalising, so under hash routing every page collapsed onto the
// homepage and only "/" could rank — fatal for a local practice that needs
// to be found for "Jacksonville bilingual primary care".
//
// This works only because public/_redirects serves index.html for every path
// (`/*  /index.html  200`); without that rule a hard refresh on /services
// would 404 at the edge.
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import useFontLoader from './hooks/useFontLoader';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import Footer from './components/Footer';

// Route-level code splitting — the homepage bundle never carries the
// legal pages or the service detail templates.
const Home = lazy(() => import('./pages/Home'));
const CareTeam = lazy(() => import('./pages/CareTeam'));
const FAQ = lazy(() => import('./pages/FAQ'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const NotFound = lazy(() => import('./components/NotFound'));

/**
 * Scroll behaviour on navigation: jump to the top, unless the link carried a
 * hash, in which case scroll to that section instead.
 *
 * Three things this has to get right, all of which the previous
 * top-only version got wrong:
 *
 *  1. `key` is in the dependency list, not just `pathname`. React Router mints
 *     a new key on every navigation *including one to the URL you are already
 *     on*. "See single-visit pricing" is rendered on /services as well as the
 *     homepage, so without `key` that button was inert on the page it is most
 *     visible on — the effect simply never re-ran.
 *
 *  2. Routes are lazy-loaded, so on a first visit the target element does not
 *     exist yet when this effect fires. Retry across a few frames rather than
 *     giving up on the first miss.
 *
 *  3. Give up eventually. A hash pointing at something that never mounts must
 *     fall back to the top of the page, not leave the reader stranded
 *     mid-document.
 */
const MAX_ANCHOR_FRAMES = 40; // ~650ms at 60fps — long enough for a lazy chunk

function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    const toTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    if (!hash) {
      toTop();
      return undefined;
    }

    let frame;
    let attempts = 0;

    const findTarget = () => {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));

      if (el) {
        // scroll-mt-* on the target keeps it clear of the sticky navbar.
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }

      if (attempts++ < MAX_ANCHOR_FRAMES) {
        frame = requestAnimationFrame(findTarget);
        return;
      }

      toTop();
    };

    findTarget();
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);

  return null;
}

function AppContent() {
  useFontLoader();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen selection:bg-brand-marigold/40 selection:text-brand-espresso">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand-terracotta focus:text-brand-shell focus:px-4 focus:py-2 focus:rounded-full focus:font-sans focus:text-sm"
      >
        {t('nav.home')}
      </a>
      <ScrollManager />
      <Navbar />
      <main id="main-content">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<CareTeam />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Router>
          <AppContent />
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
}
