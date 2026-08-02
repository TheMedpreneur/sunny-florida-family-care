import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import practice from '../data/practice';

const BASE_URL = practice.siteUrl;

export default function SEO({
  title,
  description,
  image = `${BASE_URL}/images/logo-mark.png`,
  url = BASE_URL,
  type = 'website',
  keywords,
  noindex = false,
  schema,
}) {
  const { language } = useLanguage();
  const fullTitle = title?.includes('|') ? title : `${title} | ${practice.name}`;

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: practice.name,
    legalName: practice.legalName,
    description,
    url: BASE_URL,
    logo: `${BASE_URL}/images/logo.png`,
    image: `${BASE_URL}/images/logo.png`,
    telephone: practice.phone.replace(/[^\d]/g, '').replace(/^/, '+1-'),
    email: practice.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jacksonville',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Duval County, FL' },
      { '@type': 'AdministrativeArea', name: 'St. Johns County, FL' },
    ],
    availableLanguage: ['English', 'Spanish'],
    medicalSpecialty: 'PrimaryCare',
    priceRange: '$$',
    employee: {
      '@type': 'Person',
      name: practice.provider.name,
      honorificSuffix: practice.provider.credentialsFull,
      jobTitle: practice.provider.role,
    },
    /*
     * openingHoursSpecification was removed 8/2 along with the footer hours.
     * Leaving it here would have been the worse half of the bug: the site
     * would stop claiming fixed hours while Google carried on showing
     * "Mon–Fri 8AM–6PM" in search results and Maps, sending patients to a
     * practice that is not open. No hours in the markup means no hours
     * asserted anywhere. Restore this block only when the schedule is real.
     */
  };

  return (
    <Helmet>
      <html lang={language} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={practice.name} />
      <meta property="og:locale" content={language === 'es' ? 'es_US' : 'en_US'} />
      <meta property="og:locale:alternate" content={language === 'es' ? 'en_US' : 'es_US'} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script type="application/ld+json">{JSON.stringify(organization)}</script>
      {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
    </Helmet>
  );
}
