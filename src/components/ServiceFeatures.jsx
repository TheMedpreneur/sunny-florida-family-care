import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import { FiCheckCircle } from 'react-icons/fi';

export default function ServiceFeatures({ features, tint }) {
  return (
    <section className="py-20 bg-brand-cream">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl text-brand-espresso">
            What's <span className="italic text-brand-terracotta">included</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-2xl ${tint} border border-brand-espresso/5 flex items-start gap-4`}
            >
              <div className="w-10 h-10 rounded-full bg-brand-sage/10 flex items-center justify-center shrink-0 mt-0.5">
                <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-brand-sage" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-brand-espresso mb-1">{feature.title}</h3>
                <p className="font-sans text-brand-espresso/70 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}