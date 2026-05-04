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
        'ink-soft': 'rgba(31, 26, 20, 0.65)',
        accent: '#5a6b3d',
        'accent-soft': '#dfe2cc',
        line: 'rgba(31, 26, 20, 0.10)'
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-manrope)', 'system-ui', 'sans-serif']
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.23, 1, 0.32, 1)'
      }
    }
  },
  plugins: []
};
