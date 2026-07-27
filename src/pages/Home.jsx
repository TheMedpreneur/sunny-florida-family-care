import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ValueBar from '../components/ValueBar';
import WhoWeHelp from '../components/WhoWeHelp';
import Philosophy from '../components/Philosophy';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import FinalCta from '../components/FinalCta';
import { useLanguage } from '../context/LanguageContext';
import practice from '../data/practice';

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title={`${practice.name} | ${practice.tagline} — Jacksonville, FL`}
        description={t('footer.desc')}
        url={practice.siteUrl}
        keywords="family nurse practitioner Jacksonville, bilingual primary care, Spanish speaking provider Jacksonville, direct primary care Florida, telehealth Jacksonville, mobile visits, atencion primaria en espanol Jacksonville"
      />
      <Hero />
      <ValueBar />
      <WhoWeHelp />
      <Philosophy />
      <Services />
      <Pricing />
      <FinalCta />
    </>
  );
}
