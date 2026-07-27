import React from 'react';
import { motion } from 'framer-motion';

export default function TeamHero() {
  return (
    <section className="relative pt-20 pb-16 bg-brand-cream overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <span className="font-sans text-sm tracking-wider uppercase text-brand-sage font-semibold mb-4 block">
            Meet Our Familia
          </span>
          <h1 className="text-5xl md:text-6xl mb-6">
            Clinically sharp. <br/>
            <span className="italic text-brand-terracotta text-6xl md:text-7xl">Deeply empathetic.</span>
          </h1>
          
          <p className="text-xl text-brand-espresso/80 font-sans leading-relaxed mb-6">
            Whether you’re managing a chronic condition, coming in for preventive care, or simply looking for a provider that truly listens, you’ll find a place where you’re seen, heard, and valued.
          </p>
        </motion.div>
      </div>
      
      {/* Decorative Arch Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[500px] bg-brand-marigold/5 arch-crop-reverse -z-10" />
    </section>
  );
}