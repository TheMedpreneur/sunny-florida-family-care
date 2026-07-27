import React, { Suspense, lazy, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

/** Jump to the top on navigation — otherwise a deep page opens mid-scroll. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
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
      <ScrollToTop />
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
