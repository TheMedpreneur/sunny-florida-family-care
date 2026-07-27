import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import ServiceDetailHero from '../components/ServiceDetailHero';
import ServiceFeatures from '../components/ServiceFeatures';
import ServiceProcess from '../components/ServiceProcess';
import ServiceFaq from '../components/ServiceFaq';
import ServiceCta from '../components/ServiceCta';
import { useLanguage } from '../context/LanguageContext';
import { serviceDetails, serviceSlugs } from '../data/serviceDetails';
import practice from '../data/practice';

export default function ServiceDetail() {
  const { slug } = useParams();
  const { t } = useLanguage();

  if (!serviceSlugs.includes(slug)) {
    return <Navigate to="/services" replace />;
  }

  const service = serviceDetails[slug];
  const prefix = `services.${slug}`;

  const title = t(`${prefix}.title`);
  const titleItalic = t(`${prefix}.titleItalic`);
  const subtitle = t(`${prefix}.detail`);

  const features = service.features.map((_, i) => ({
    title: t(`${prefix}.features.${i}.title`),
    description: t(`${prefix}.features.${i}.desc`),
  }));

  const steps = service.steps.map((_, i) => ({
    title: t(`${prefix}.steps.${i}.title`),
    description: t(`${prefix}.steps.${i}.desc`),
  }));

  const faqItems = service.faqItems.map((_, i) => ({
    question: t(`${prefix}.faq.${i}.q`),
    answer: t(`${prefix}.faq.${i}.a`),
  }));

  return (
    <div className="bg-brand-cream min-h-screen">
      <SEO
        title={`${title} ${titleItalic}`}
        description={subtitle}
        url={`${practice.siteUrl}/#/services/${slug}`}
        keywords={`${title}, Jacksonville, ${practice.provider.fullTitle}, bilingual primary care, private pay`}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        }}
      />

      <ServiceDetailHero
        title={title}
        titleItalic={titleItalic}
        subtitle={subtitle}
        icon={service.icon}
        tint={service.tint}
      />
      <ServiceFeatures features={features} />
      <ServiceProcess steps={steps} />
      <ServiceFaq faqItems={faqItems} />
      <ServiceCta />
    </div>
  );
}
