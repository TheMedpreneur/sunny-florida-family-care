import React from 'react';

/*
 * Variants map to the deepened palette:
 *   primary   terracotta fill + shell text ....... 4.73:1  AA
 *   secondary sage fill + shell text ............. 5.44:1  AA
 *   sun       amber fill + espresso text ......... 6.12:1  AA  (dark bands)
 *   outline   espresso hairline, fills on hover
 *   ghost     text-only, terracottaInk for contrast on light
 *
 * Every variant clears the 44px minimum tap target.
 */
export default function Button({
  children,
  variant = 'primary',
  className = '',
  href,
  ...props
}) {
  const baseStyles =
    'relative px-8 py-3.5 min-h-tap rounded-full font-sans font-semibold ' +
    'transition-all duration-400 ease-soft-ease active:scale-[0.97] ' +
    'inline-flex items-center justify-center text-center overflow-hidden';

  const variants = {
    primary:
      'bg-brand-terracotta text-brand-shell hover:bg-brand-terracottaDeep hover:-translate-y-[2px] shadow-glow',
    secondary:
      'bg-brand-sage text-brand-shell hover:-translate-y-[2px] hover:shadow-soft',
    sun:
      'bg-brand-marigold text-brand-espresso hover:bg-brand-marigoldLight hover:-translate-y-[2px] shadow-soft',
    outline:
      'border-2 border-brand-espresso text-brand-espresso hover:bg-brand-espresso hover:text-brand-cream',
    ghost:
      'text-brand-terracottaInk hover:bg-brand-terracotta/10',
  };

  const isPrimary = variant === 'primary';
  const Tag = href ? 'a' : 'button';

  return (
    <Tag
      href={href}
      type={href ? undefined : props.type || 'button'}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {/*
        Sunbeam shimmer — decorative only. CSS keyframes rather than a JS
        animation loop, and it stops entirely under prefers-reduced-motion.
      */}
      {isPrimary && <span className="btn-shimmer" aria-hidden="true" />}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Tag>
  );
}
