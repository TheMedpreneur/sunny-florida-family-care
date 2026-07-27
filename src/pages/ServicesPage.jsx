import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import Button from '../components/Button';
import SafeIcon from '../common/SafeIcon';
import { FiHome, FiVideo, FiShield, FiHeart, FiActivity, FiArrowRight } from 'react-icons/fi';

const DetailedServiceCard = ({ title, desc, detail, icon, tint, slug, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className={`p-10 rounded-[40px] border border-brand-espresso/5 shadow-soft overflow-hidden relative group ${tint}`}
  >
    <div className="relative z-10">
      <div className="w-14 h-14 rounded-2xl bg-white/80 flex items-center justify-center text-brand-terracotta mb-6 shadow-sm">
        <SafeIcon icon={icon} className="w-7 h-7" />
      </div>
      <h3 className="text-3xl mb-4 text-brand-espresso">{title}</h3>
      <p className="font-sans text-lg text-brand-espresso/80 font-semibold mb-4">{desc}</p>
      <p className="font-sans text-brand-espresso/70 leading-relaxed mb-8">
        {detail}
      </p>
      <Link
        to={`/services/${slug}`}
        className="inline-flex items-center gap-2 font-sans font-semibold text-brand-terracotta hover:gap-3 transition-all duration-300"
      >
        Learn more
        <SafeIcon icon={FiArrowRight} className="w-4 h-4" aria-hidden="true" />
      </Link>
    </div>
    <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/20 rounded-full blur-3xl group-hover:bg-white/40 transition-colors duration-700" aria-hidden="true" />
  </motion.div>
);

export default function ServicesPage() {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.mobile.title'),
      desc: t('services.mobile.desc'),
      detail: t('services.mobile.detail'),
      icon: FiHome,
      tint: "bg-brand-tintPink",
      slug: "mobile",
      delay: 0.1
    },
    {
      title: t('services.tele.title'),
      desc: t('services.tele.desc'),
      detail: t('services.tele.detail'),
      icon: FiVideo,
      tint: "bg-brand-tintBlue",
      slug: "tele",
      delay: 0.2
    },
    {
      title: t('services.member.title'),
      desc: t('services.member.desc'),
      detail: t('services.member.detail'),
      icon: FiShield,
      tint: "bg-brand-tintYellow",
      slug: "member",
      delay: 0.3
    },
    {
      title: t('services.pediatrics.title'),
      desc: t('services.pediatrics.desc'),
      detail: t('services.pediatrics.detail'),
      icon: FiHeart,
      tint: "bg-brand-creamDark",
      slug: "pediatrics",
      delay: 0.4
    },
    {
      title: t('services.chronic.title'),
      desc: t('services.chronic.desc'),
      detail: t('services.chronic.detail'),
      icon: FiActivity,
      tint: "bg-brand-sage/10",
      slug: "chronic",
      delay: 0.5
    }
  ];

  return (
    <div className="bg-brand-cream min-h-screen">
      <SEO
        title="Our Services"
        description="Mobile house calls, telehealth visits, direct primary care memberships, pediatric care, and chronic disease management in Jacksonville, FL."
        url="https://www.sunnyfamily.health/#/services"
        keywords="mobile visits, telehealth, direct primary care, pediatrics, chronic care, Jacksonville healthcare services"
      />

      {/* Header Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-sans text-sm tracking-wider uppercase text-brand-terracotta font-semibold mb-4 block">
              {t('nav.services')}
            </span>
            <h1 className="text-5xl md:text-7xl mb-6">
              {t('services.title')}{' '}
              <span className="italic font-serif text-brand-sage">{t('services.titleItalic')}</span>
            </h1>
            <p className="text-xl text-brand-espresso/60 font-sans max-w-2xl mx-auto leading-relaxed">
              {t('services.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8" role="list" aria-label="Healthcare services">
            {services.map((service, index) => (
              <div key={index} role="listitem">
                <DetailedServiceCard {...service} />
              </div>
            ))}

            {/* Final CTA Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[40px] bg-brand-terracotta text-brand-cream flex flex-col justify-center items-center text-center shadow-glow"
            >
              <h3 className="text-3xl mb-6">Ready for a different kind of care?</h3>
              <p className="font-sans text-brand-cream/80 mb-8 max-w-sm">
                Join our family today and experience healthcare that truly sees you.
              </p>
              <Button variant="primary" className="bg-brand-marigold text-brand-espresso border-none hover:bg-white text-lg px-10">
                {t('services.cta')}
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Callout */}
      <section className="py-24 bg-brand-creamDark overflow-hidden relative">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square arch-crop overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=75&w=700&auto=format&fit=crop&fm=webp"
                alt="Compassionate healthcare provider with patient"
                className="w-full h-full object-cover"
                loading="lazy"
                width="700"
                height="700"
              />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl">
              Medical expertise <br />
              <span className="italic text-brand-terracotta">delivered with heart.</span>
            </h2>
            <p className="text-lg font-sans text-brand-espresso/70 leading-relaxed">
              We translate the complex jargon of modern medicine into plain English (and Spanish)
              so you can make empowered decisions for your family.
            </p>
            <div className="pt-4">
              <Link to="/team">
                <Button variant="outline">Learn Our Philosophy</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}