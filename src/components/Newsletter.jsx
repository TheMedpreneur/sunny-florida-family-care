import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

export default function Newsletter() {
  return (
    <section className="py-24 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-[1000px] mx-auto bg-brand-sage rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-marigold/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-turquoise/10 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="font-hand text-brand-marigold text-3xl mb-4 block -rotate-2">Únete a la familia</span>
          <h2 className="text-4xl md:text-5xl text-brand-cream mb-6">Health tips for your kitchen table.</h2>
          <p className="text-brand-cream/80 text-lg font-sans mb-10">
            Get our monthly "Consejos de Salud" — simple, actionable wellness tips for the whole family, delivered with heart.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email address"
              className="flex-1 px-6 py-4 rounded-full bg-brand-cream/10 border border-brand-cream/20 text-brand-cream placeholder:text-brand-cream/40 focus:outline-none focus:ring-2 focus:ring-brand-marigold"
            />
            <Button variant="primary" className="bg-brand-marigold text-brand-espresso hover:bg-white">
              Subscribe
            </Button>
          </form>
          <p className="mt-4 text-xs font-sans text-brand-cream/40 italic">
            We respect your privacy. No spam, just sunshine.
          </p>
        </div>
      </motion.div>
    </section>
  );
}