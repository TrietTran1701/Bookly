import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#020c1b',
        navy: '#0a192f',
        'light-navy': '#112240',
        'lightest-navy': '#233554',
        'navy-shadow': 'rgba(2, 12, 27, 0.7)',
        'dark-slate': '#495670',
        slate: '#8892b0',
        'light-slate': '#a8b2d1',
        'lightest-slate': '#ccd6f6',
        white: '#e6f1ff',
        green: '#64ffda',
        'green-tint': 'rgba(100, 255, 218, 0.1)',
        pink: '#f57dff',
        blue: '#57cbff',
      },
      fontSize: {
        xxs: '12px',
        xs: '13px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
        xxl: '22px',
        heading: '32px',
      },
      borderRadius: {
        default: '4px',
      },
      height: {
        nav: '100px',
        'nav-scroll': '70px',
        tab: '42px',
      },
      width: {
        tab: '120px',
      },
      fontFamily: {
        primary: ['Inter', ...defaultTheme.fontFamily.sans],
        calibre: ['Calibre', ...defaultTheme.fontFamily.sans],
        'sf-mono': ['SF Mono', ...defaultTheme.fontFamily.sans],
        // sf-mono: ['SF Mono', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
        'ham-before': {
          '0%': {
            top: '0.1s',
            ease: 'ease-in',
            delay: '0.25s',
            opacity: '0.1s',
          },
          '100%': {
            top: '0.1s',
            ease: 'ease-out',
            opacity: '0.1s',
            delay: '0.12s',
          },
        },
        'ham-before-active': {
          '0%': { top: '0.1s', ease: 'ease-out', opacity: '0.1s' },
          '100%': {
            top: '0.1s',
            ease: 'ease-out',
            opacity: '0.1s',
            delay: '0.12s',
          },
        },
        'ham-after': {
          '0%': {
            bottom: '0.1s',
            ease: 'ease-in',
            delay: '0.25s',
            transform: '0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)',
          },
          '100%': {
            bottom: '0.1s',
            ease: 'ease-out',
            transform: '0.22s cubic-bezier(0.215, 0.61, 0.355, 1)',
            delay: '0.12s',
          },
        },
        'ham-after-active': {
          '0%': {
            bottom: '0.1s',
            ease: 'ease-out',
            transform: '0.22s cubic-bezier(0.215, 0.61, 0.355, 1)',
            delay: '0.12s',
          },
          '100%': {
            bottom: '0.1s',
            ease: 'ease-out',
            transform: '0.22s cubic-bezier(0.215, 0.61, 0.355, 1)',
            delay: '0.12s',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
        'ham-before': 'ham-before 0.1s ease-in 0.25s',
        'ham-before-active': 'ham-before-active 0.1s ease-out',
        'ham-after': 'ham-after 0.1s ease-in 0.25s',
        'ham-after-active': 'ham-after-active 0.1s ease-out',
      },
      transitionTimingFunction: {
        'cubic-bezier': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
      transitionDuration: {
        '250': '0.25s',
        default: '0.25s',
      },
      transitionProperty: {
        custom: 'all',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
