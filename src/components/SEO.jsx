import React from 'react';
import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://www.sunnyfamily.health';

export default function SEO({
  title = 'Sunny Florida Family Care | El Toque Humano',
  description = 'Culturally competent healthcare for multi-generational families in Jacksonville, FL. We treat people like people, not patients.',
  image = `${BASE_URL}/og-image.jpg`,
  url = BASE_URL,
  type = 'website',
  keywords = 'family care, JacksonVille, healthcare, bilingual, Spanish, direct primary care, telehealth, mobile visits',
  noindex = false,
}) {
  const fullTitle = title.includes('|') ? title : `${title} | Sunny Florida Family Care`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Sunny Florida Family Care" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="es_ES" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data - Medical Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          "name": "Sunny Florida Family Care",
          "description": description,
          "url": BASE_URL,
          "telephone": "+1-904-555-0123",
          "email": "hola@sunnyfamily.health",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Jacksonville",
            "addressRegion": "FL",
            "addressCountry": "US"
          },
          "areaServed": ["Duval County", "St. Johns County"],
          "availableLanguage": ["English", "Spanish"],
          "medicalSpecialty": "FamilyPractice"
        })}
      </script>
    </Helmet>
  );
}