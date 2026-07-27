import React from 'react';
import { motion } from 'framer-motion';

export default function ServiceProcess({ steps }) {
  return (
    <section className="py-20 bg-brand-creamDark">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl text-brand-espresso">
            How it <span className="italic text-brand-sage">works</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px bg-brand-espresso/10 hidden md:block"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex items-start gap-6 md:gap-8 relative"
              >
                {/* Step Number */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-brand-terracotta text-brand-cream flex items-center justify-center font-serif text-xl font-medium shrink-0 shadow-glow">
                  {index + 1}
                </div>

                {/* Step Content */}
                <div className="flex-1 pb-2">
                  <h3 className="font-serif text-2xl text-brand-espresso mb-2">
                    {step.title}
                  </h3>
                  <p className="font-sans text-brand-espresso/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}