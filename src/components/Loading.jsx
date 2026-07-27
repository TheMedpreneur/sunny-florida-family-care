import React from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div
      className="min-h-[60vh] flex flex-col items-center justify-center bg-brand-cream"
      role="status"
      aria-label="Loading page content"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="w-12 h-12 rounded-full border-4 border-brand-marigold/30 border-t-brand-terracotta"
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 font-sans text-brand-espresso/60 text-sm tracking-wide"
      >
        Loading…
      </motion.p>
    </div>
  );
}