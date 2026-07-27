import React from 'react';
import { motion } from 'framer-motion';

export default function TeamMember({ name, role, bio, image, note, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group"
    >
      <div className="relative mb-6">
        <div className="aspect-[4/5] arch-crop overflow-hidden shadow-soft border-4 border-brand-cream bg-brand-creamDark relative">
          <img
            src={image}
            alt={`${name}, ${role}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            width="600"
            height="750"
          />
          <div className="absolute inset-0 bg-brand-terracotta/5 mix-blend-multiply pointer-events-none" aria-hidden="true" />
        </div>

        {/* Handwritten Accent */}
        {note && (
          <motion.div
            initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
            whileInView={{ opacity: 1, rotate: -10, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.4, duration: 0.5 }}
            className="absolute -right-4 -bottom-4 bg-brand-marigold px-4 py-2 rounded-full shadow-glow z-10"
          >
            <span className="font-hand text-brand-espresso text-xl whitespace-nowrap">
              {note}
            </span>
          </motion.div>
        )}
      </div>

      <h3 className="text-3xl mb-1">{name}</h3>
      <p className="font-sans text-brand-sage font-semibold uppercase tracking-wider text-sm mb-4">
        {role}
      </p>
      <p className="font-sans text-brand-espresso/75 leading-relaxed">
        {bio}
      </p>
    </motion.div>
  );
}