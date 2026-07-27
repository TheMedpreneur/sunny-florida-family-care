import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

const STORAGE_KEY = 'sffc-lang';
const SUPPORTED = ['en', 'es'];

/** Homepage defaults to English per Ana (7/16); Spanish is one tap away. */
const DEFAULT_LANG = 'en';

function readInitialLanguage() {
  if (typeof window === 'undefined') return DEFAULT_LANG;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED.includes(saved)) return saved;
  } catch {
    /* private browsing / storage disabled - fall through */
  }
  return DEFAULT_LANG;
}

/**
 * Walks a dot path through the translation tree.
 *
 * Deliberately checks `key in obj` rather than truthiness: the previous
 * version used `if (result[key])`, which silently fell through to the raw
 * path string for any empty string, 0, or false - and then rendered that
 * path as visible UI text. Arrays are returned intact for list content.
 */
function lookup(tree, path) {
  const keys = path.split('.');
  let node = tree;
  for (const key of keys) {
    if (node === null || typeof node !== 'object' || !(key in node)) return undefined;
    node = node[key];
  }
  return node;
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(readInitialLanguage);

  // Keep <html lang> in sync - screen readers switch voice on this, and it
  // is what stops Chrome/Safari offering to auto-translate an already
  // Spanish page over the top of our own translation.
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      /* non-fatal */
    }
  }, [language]);

  const t = useCallback(
    (path) => {
      const hit = lookup(translations[language], path);
      if (hit !== undefined) return hit;

      // Fall back to English rather than showing a raw key to a patient.
      const fallback = lookup(translations.en, path);
      if (fallback !== undefined) {
        if (import.meta.env?.DEV) {
          console.warn(`[i18n] missing "${language}" translation for "${path}" - showing English`);
        }
        return fallback;
      }

      if (import.meta.env?.DEV) {
        console.error(`[i18n] no translation found for "${path}" in any language`);
      }
      return '';
    },
    [language]
  );

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'en' ? 'es' : 'en'));
  }, []);

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t,
    /** Label for the control that switches AWAY from the current language. */
    otherLanguageLabel: language === 'en' ? 'Español' : 'English',
    otherLanguageCode: language === 'en' ? 'es' : 'en',
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside a LanguageProvider');
  return ctx;
};
