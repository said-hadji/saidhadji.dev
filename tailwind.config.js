/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#06060a',
          900: '#0b0b12',
          850: '#0f0f18',
          800: '#12121b',
          700: '#1b1b26',
        },
        mist: {
          100: '#f4f4f6',
          300: '#c7c7d1',
          400: '#9a9aa8',
          600: '#6b6b78',
        },
        violet: {
          400: '#9b86ff',
          500: '#7c5cfc',
          600: '#6845e8',
        },
        gold: {
          300: '#f7cc6d',
          400: '#f0b429',
          500: '#d99a1b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        'glow-violet': '0 0 60px -12px rgba(124,92,252,0.45)',
        'glow-gold': '0 0 60px -12px rgba(240,180,41,0.35)',
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 40px -20px rgba(0,0,0,0.6)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-18px) translateX(6px)' },
        },
        'float-rev': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(16px) translateX(-8px)' },
        },
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        float: 'float 9s ease-in-out infinite',
        'float-rev': 'float-rev 11s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out both',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
