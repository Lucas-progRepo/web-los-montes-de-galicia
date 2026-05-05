/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#f4ede0',
        surface: '#faf6ec',
        ink: '#1f1a14',
        inkSoft: 'rgba(31, 26, 20, 0.65)',
        accent: '#5a6b3d',
        accentSoft: '#dfe2cc',
        line: 'rgba(31, 26, 20, 0.10)'
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif']
      },
      transitionTimingFunction: {
        'out-soft': 'cubic-bezier(0.23, 1, 0.32, 1)'
      }
    }
  },
  plugins: []
};
