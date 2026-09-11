/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#101418',
          dim: '#101418',
          bright: '#36393f',
          lowest: '#0b0e13',
          low: '#191c21',
          container: '#1d2025',
          high: '#272a2f',
          highest: '#32353a',
          variant: '#32353a'
        },
        primary: {
          DEFAULT: '#ffbc3f',
          dim: '#ffba36',
          container: '#e3a008',
          fixed: '#ffdeac'
        },
        'on-primary': '#432c00',
        'on-surface': '#e1e2e9',
        'on-surface-variant': '#d5c4ad',
        secondary: {
          DEFAULT: '#bdc7d6',
          container: '#404a56'
        },
        outline: {
          DEFAULT: '#9e8f7a',
          variant: '#514534'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite'
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: 1, filter: 'drop-shadow(0 0 8px rgba(255, 188, 63, 0.6))' },
          '50%': { opacity: 0.5, filter: 'drop-shadow(0 0 2px rgba(255, 188, 63, 0.2))' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        }
      }
    },
  },
  plugins: [],
}
