import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  { ignores: ['dist', 'node_modules'] },
  js.configs.recommended,
  {
    // Browser code
    files: ['src/**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: { ...globals.browser, React: true, JSX: true },
      parserOptions: { ecmaFeatures: { jsx: true }, sourceType: 'module' },
    },
    plugins: { 'react-hooks': reactHooks, 'react-refresh': reactRefresh },
    rules: {
      'no-undef': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': 'off',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'no-case-declarations': 'off',
      'no-useless-catch': 'off',
      'no-empty': ['error', { allowEmptyCatch: true }],
    },
  },
  {
    // Build tooling runs in Node, not the browser
    files: ['scripts/**/*.mjs', '*.config.js'],
    languageOptions: {
      ecmaVersion: 2022,
      // The QA script runs in Node but page.evaluate() bodies are serialised
      // and executed in the browser, so both sets of globals are legitimate.
      globals: { ...globals.node, ...globals.browser },
      parserOptions: { sourceType: 'module' },
    },
  },
];
