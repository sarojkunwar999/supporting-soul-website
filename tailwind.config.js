/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./main.js",
    "./src/**/*.{js,html}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0B0F17',
        'deep-space': '#101827',
        gold: '#D7B56D',
        'gold-light': '#E8C97E',
        electric: '#2EA7FF',
        'soft-white': '#EAF0FF',
        'muted': '#8A96B0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(215,181,109,0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(215,181,109,0.4)' },
        },
      },
    },
  },
  plugins: [],
}

