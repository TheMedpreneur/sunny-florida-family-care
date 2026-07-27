import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import { FiStar } from 'react-icons/fi';

export default function ServiceTestimonial({ testimonial }) {
  return (
    <section className="py-20 bg-brand-cream">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-8" aria-label="5 star rating">
            {[...Array(5)].map((_, i) => (
              <SafeIcon
                key={i}
                icon={FiStar}
                className="w-6 h-6 text-brand-marigold fill-brand-marigold"
                aria-hidden="true"
              />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="mb-8">
            <p className="font-serif text-2xl md:text-3xl text-brand-espresso leading-relaxed italic">
              "{testimonial.quote}"
            </p>
          </blockquote>

          {/* Attribution */}
          <div className="space-y-1">
            <p className="font-sans font-semibold text-brand-terracotta">
              {testimonial.name}
            </p>
            <p className="font-sans text-sm text-brand-espresso/50">
              {testimonial.context}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}