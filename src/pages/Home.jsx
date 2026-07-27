import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ValueBar from '../components/ValueBar';
import WhoWeHelp from '../components/WhoWeHelp';
import Philosophy from '../components/Philosophy';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import FinalCta from '../components/FinalCta';

export default function Home() {
  return (
    <>
      <SEO
        title="Sunny Florida Family Care | El Toque Humano"
        description="Culturally competent healthcare for multi-generational families in Jacksonville, FL. Same-day appointments, bilingual providers, and transparent pricing."
        url="https://www.sunnyfamily.health"
        keywords="family care, Jacksonville, healthcare, bilingual, Spanish, direct primary care, telehealth, mobile visits, pediatric care"
      />
      <Hero />
      <ValueBar />
      <WhoWeHelp />
      <Philosophy />
      <Pricing />
      <Services />
      <FinalCta />
    </>
  );
}