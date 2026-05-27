import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // PraisePause brand palette
        sky: {
          50:  '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        gold: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        brand: {
          blue:       '#3B82F6',
          'blue-dark':'#1D4ED8',
          gold:       '#F59E0B',
          'gold-light':'#FCD34D',
          soft:       '#EFF6FF',
          cream:      '#FFFBEB',
        },
      },
      fontFamily: {
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-cal)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'hero-gradient':    'linear-gradient(135deg, #EFF6FF 0%, #FFF7ED 50%, #F0FDF4 100%)',
        'cta-gradient':     'linear-gradient(135deg, #1D4ED8 0%, #7C3AED 100%)',
        'gold-gradient':    'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
        'heaven-gradient':  'linear-gradient(180deg, #EFF6FF 0%, #FFFFFF 100%)',
      },
      animation: {
        'fade-up':      'fadeUp 0.6s ease-out forwards',
        'fade-in':      'fadeIn 0.5s ease-out forwards',
        'float':        'float 3s ease-in-out infinite',
        'glow-pulse':   'glowPulse 2s ease-in-out infinite',
        'shimmer':      'shimmer 2s linear infinite',
        'bounce-slow':  'bounce 2s ease-in-out infinite',
        'scale-in':     'scaleIn 0.4s ease-out forwards',
        'slide-right':  'slideRight 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(59,130,246,0.3)' },
          '50%':      { boxShadow: '0 0 40px rgba(59,130,246,0.6)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideRight: {
          '0%':   { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 30px rgba(59, 130, 246, 0.3)',
        'glow-gold': '0 0 30px rgba(245, 158, 11, 0.3)',
        'card':      '0 4px 24px rgba(0, 0, 0, 0.07)',
        'card-hover':'0 8px 40px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
