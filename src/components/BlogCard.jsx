import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

export default function BlogCard({ title, excerpt, category, date, image, delay = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group cursor-pointer"
    >
      <div className="relative mb-6 overflow-hidden arch-crop aspect-[16/10] bg-brand-creamDark shadow-soft">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          width="600"
          height="375"
        />
        <div className="absolute top-4 left-4 bg-brand-cream/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-widest text-brand-sage">
          {category}
        </div>
      </div>

      <div className="space-y-3">
        <span className="font-sans text-xs text-brand-espresso/50 uppercase tracking-widest">{date}</span>
        <h3 className="text-2xl leading-tight group-hover:text-brand-terracotta transition-colors">{title}</h3>
        <p className="font-sans text-brand-espresso/70 line-clamp-2 leading-relaxed">
          {excerpt}
        </p>
        <div className="pt-2">
          <span className="text-brand-terracotta font-sans font-semibold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
            Read Story
            <span className="text-lg" aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </motion.article>
  );
}