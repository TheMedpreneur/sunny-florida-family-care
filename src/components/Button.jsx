import React from 'react';
import { motion } from 'framer-motion';

export default function Button({ children, variant = 'primary', className = '', href, ...props }) {
  const baseStyles = "relative px-8 py-3.5 rounded-full font-sans font-medium transition-all duration-400 ease-soft-ease active:scale-[0.97] inline-flex items-center justify-center overflow-hidden";
  
  const variants = {
    primary: "bg-brand-terracotta text-brand-cream hover:-translate-y-[2px] shadow-glow hover:shadow-[0_12px_24px_-8px_rgba(224,122,95,0.6)]",
    secondary: "bg-brand-sage text-brand-cream hover:-translate-y-[2px] hover:shadow-soft",
    outline: "border-2 border-brand-espresso text-brand-espresso hover:bg-brand-espresso hover:text-brand-cream",
    ghost: "text-brand-terracotta hover:bg-brand-terracotta/10",
  };

  const isPrimary = variant === 'primary';
  
  // If an href is provided, render an anchor tag (<a>), otherwise a button
  const MotionTag = href ? motion.a : motion.button;

  return (
    <MotionTag 
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {/* Sunbeam Shimmer Overlay */}
      {isPrimary && (
        <motion.div 
          initial={{ x: '-150%', skewX: -25 }}
          animate={{ x: '150%' }}
          transition={{ 
            repeat: Infinity, 
            repeatDelay: 3, 
            duration: 1.5, 
            ease: "easeInOut" 
          }}
          className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent z-0 pointer-events-none"
        />
      )}
      
      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </MotionTag>
  );
}