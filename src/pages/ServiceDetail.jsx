import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import ServiceDetailHero from '../components/ServiceDetailHero';
import ServiceFeatures from '../components/ServiceFeatures';
import ServiceProcess from '../components/ServiceProcess';
import ServiceTestimonial from '../components/ServiceTestimonial';
import ServiceFaq from '../components/ServiceFaq';
import ServiceCta from '../components/ServiceCta';
import { useLanguage } from '../context/LanguageContext';
import { serviceDetails, serviceSlugs } from '../data/serviceDetails';

export default function ServiceDetail() {
  const { slug } = useParams();
  const { t } = useLanguage();

  // Redirect to /services if slug is invalid
  if (!serviceSlugs.includes(slug)) {
    return <Navigate to="/services" replace />;
  }

  const service = serviceDetails[slug];
  const prefix = `services.${slug}`;

  // Build translated content
  const title = t(`${prefix}.title`);
  const titleItalic = t(`${prefix}.titleItalic`);
  const subtitle = t(`${prefix}.detail`);

  const features = service.features.map((featKey, i) => ({
    title: t(`${prefix}.features.${i}.title`),
    description: t(`${prefix}.features.${i}.desc`),
  }));

  const steps = service.steps.map((_, i) => ({
    title: t(`${prefix}.steps.${i}.title`),
    description: t(`${prefix}.steps.${i}.desc`),
  }));

  const testimonial = {
    quote: t(`${prefix}.testimonial.quote`),
    name: t(`${prefix}.testimonial.name`),
    context: t(`${prefix}.testimonial.context`),
  };

  const faqItems = service.faqItems.map((_, i) => ({
    question: t(`${prefix}.faq.${i}.q`),
    answer: t(`${prefix}.faq.${i}.a`),
  }));

  return (
    <div className="bg-brand-cream min-h-screen">
      <SEO
        title={`${title} ${titleItalic}`}
        description={subtitle}
        url={`https://www.sunnyfamily.health/#/services/${slug}`}
        keywords={`${slug}, Jacksonville, healthcare, family care, ${t('nav.services').toLowerCase()}`}
      />

      <ServiceDetailHero
        title={title}
        titleItalic={titleItalic}
        subtitle={subtitle}
        icon={service.icon}
        tint={service.tint}
        tintAccent={service.tintAccent}
        heroImage={service.heroImage}
        t={t}
      />

      <ServiceFeatures features={features} tint={service.tint} />
      <ServiceProcess steps={steps} />
      <ServiceTestimonial testimonial={testimonial} />
      <ServiceFaq faqItems={faqItems} />
      <ServiceCta t={t} />
    </div>
  );
}