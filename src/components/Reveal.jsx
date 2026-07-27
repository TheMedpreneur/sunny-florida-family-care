import React, { useEffect, useRef, useState } from 'react';

/*
 * REVEAL
 * ======
 * Replaces framer-motion (~35KB gzipped) for the only thing this site used it
 * for: fade/slide a block into view once. IntersectionObserver + two CSS
 * classes does the same job in well under 1KB and never blocks first paint.
 *
 *   <Reveal>            fade up  (default)
 *   <Reveal from="left">   slide in from the left
 *   <Reveal from="right">
 *   <Reveal from="scale">  settle in from 95%
 *   <Reveal delay={0.1}>   stagger, in seconds
 *   <Reveal once={false}>  re-animate on every entry
 *
 * Respects prefers-reduced-motion: content appears immediately, no transform.
 */

const FROM = {
  up: 'reveal-up',
  left: 'reveal-left',
  right: 'reveal-right',
  scale: 'reveal-scale',
};

export default function Reveal({
  children,
  from = 'up',
  delay = 0,
  as: Tag = 'div',
  className = '',
  once = true,
  rootMargin = '-60px',
  ...rest
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No IntersectionObserver (or reduced motion) — show it straight away.
    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    ) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          if (once) io.disconnect();
        } else if (!once) {
          setShown(false);
        }
      },
      { rootMargin, threshold: 0.01 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once, rootMargin]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${FROM[from] || FROM.up} ${shown ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
