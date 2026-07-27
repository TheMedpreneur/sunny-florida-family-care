/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          terracotta: '#E07A5F',
          sage: '#799465',
          turquoise: '#78C6B6',
          cream: '#FDFBF7',
          creamDark: '#F4EFE6',
          espresso: '#3E2F28',
          marigold: '#F4C987',
          tintPink: '#FCEBEE',
          tintBlue: '#E6F4F1',
          tintYellow: '#FEF8E7',
        },
      },
      fontFamily: {
        /*
         * Font stacks with carefully tuned system fallbacks.
         * Each fallback is chosen to closely match the web font's
         * x-height and character width to minimize CLS on swap.
         */
        sans: [
          '"Hanken Grotesk"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        serif: [
          '"Newsreader"',
          'Georgia',
          '"Times New Roman"',
          'Times',
          'serif',
        ],
        hand: [
          '"Caveat"',
          '"Comic Sans MS"',
          '"Segoe Script"',
          'cursive',
        ],
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '24px',
        '3xl': '32px',
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(62, 47, 40, 0.08)',
        'glow': '0 8px 20px -6px rgba(224, 122, 95, 0.4)',
      },
      transitionTimingFunction: {
        'soft-ease': 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}