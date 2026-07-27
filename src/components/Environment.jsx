import React from 'react';
import { motion } from 'framer-motion';

export default function Environment() {
  return (
    <section id="approach" className="py-24 bg-brand-sage text-brand-cream overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-brand-cream">
              Not your typical <br />
              <span className="italic text-brand-marigold">clinic</span>.
            </h2>

            <div className="space-y-4 font-sans text-brand-cream/90 text-lg">
              <p>
                We actively fight the "hospital blue" and sterile white. Our space is designed
                to feel like a welcoming neighborhood café or a friend's home.
              </p>

              <ul className="space-y-4 mt-8" role="list">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-marigold mt-2.5 shrink-0" aria-hidden="true" />
                  <span><strong className="block text-brand-marigold font-serif text-xl">The Greenery</strong> Real plants, pothos, and indoor palms fill the space with life.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-marigold mt-2.5 shrink-0" aria-hidden="true" />
                  <span><strong className="block text-brand-marigold font-serif text-xl">The Scent</strong> Subtle warmth of vanilla and citrus. Never chemical bleach.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-marigold mt-2.5 shrink-0" aria-hidden="true" />
                  <span><strong className="block text-brand-marigold font-serif text-xl">The Sound</strong> Soft acoustic bossa nova or beach jazz. No elevator music or fluorescent-light silence.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 relative"
          >
            <div className="aspect-square arch-crop-reverse overflow-hidden border-4 border-brand-marigold/30 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=75&w=700&auto=format&fit=crop&fm=webp"
                alt="Warm, plant-filled clinic space designed to feel like home"
                className="w-full h-full object-cover"
                loading="lazy"
                width="700"
                height="700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}