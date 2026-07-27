import { useEffect } from 'react';

/**
 * useFontLoader — Tracks web font loading state via the Font Loading API.
 *
 * Adds `fonts-loading` class to <html> immediately on mount,
 * then swaps to `fonts-loaded` once all critical fonts are ready.
 *
 * Benefits:
 * - Prevents FOIT (Flash of Invisible Text)
 * - Enables CSS-driven fallback styling during load
 * - Minimizes Cumulative Layout Shift (CLS)
 *
 * Gracefully degrades if the Font Loading API is unavailable.
 */
export default function useFontLoader() {
  useEffect(() => {
    const root = document.documentElement;

    // Mark as loading immediately
    root.classList.add('fonts-loading');

    // If the Font Loading API isn't supported, assume loaded
    if (!('fonts' in document)) {
      root.classList.remove('fonts-loading');
      root.classList.add('fonts-loaded');
      return;
    }

    // Wait for the three critical font families to finish loading
    const fontFamilies = [
      '400 1em "Hanken Grotesk"',
      '400 1em "Newsreader"',
      '400 1em "Caveat"',
    ];

    Promise.all(
      fontFamilies.map((font) =>
        document.fonts.ready.then(() => document.fonts.check(font))
      )
    )
      .then(() => {
        root.classList.remove('fonts-loading');
        root.classList.add('fonts-loaded');
      })
      .catch(() => {
        // On failure, still mark as loaded so text remains visible
        root.classList.remove('fonts-loading');
        root.classList.add('fonts-loaded');
      });

    // Safety timeout: if fonts haven't loaded in 5s, force "loaded" state
    const timeout = setTimeout(() => {
      if (root.classList.contains('fonts-loading')) {
        root.classList.remove('fonts-loading');
        root.classList.add('fonts-loaded');
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);
}