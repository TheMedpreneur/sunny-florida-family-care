import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import { FiArrowLeft } from 'react-icons/fi';

export default function ServiceDetailHero({ title, titleItalic, subtitle, icon, tint, tintAccent, heroImage, t }) {
  return (
    <section className={`relative pt-8 pb-16 overflow-hidden ${tint}`}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-sans text-sm text-brand-espresso/60 hover:text-brand-terracotta transition-colors mb-8"
          >
            <SafeIcon icon={FiArrowLeft} className="w-4 h-4" aria-hidden="true" />
            {t('services.backToServices')}
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-14 h-14 rounded-2xl ${tintAccent} flex items-center justify-center text-white shadow-soft`}>
                <SafeIcon icon={icon} className="w-7 h-7" />
              </div>
              <span className="font-sans text-sm tracking-wider uppercase text-brand-terracotta font-semibold">
                {t('services.detail.badge')}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-brand-espresso">
              {title}{' '}
              <span className="italic font-serif text-brand-terracotta">{titleItalic}</span>
            </h1>

            <p className="text-lg md:text-xl text-brand-espresso/70 font-sans leading-relaxed max-w-lg">
              {subtitle}
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-brand-marigold/10 arch-crop rotate-2 -z-10" aria-hidden="true" />
            <div className="relative aspect-[4/3] arch-crop overflow-hidden shadow-2xl border-8 border-white">
              <img
                src={heroImage}
                alt={title}
                className="w-full h-full object-cover"
                width="800"
                height="600"
                fetchPriority="high"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}