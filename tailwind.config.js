/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      colors: {
        'sunset-base': '#b45d6e',
        'sunset-light': '#d4849a',
        'sunset-dark': '#8b4355',
        'sunset-accent': '#f4a261',
        'cuban-burgundy': '#722f37',
        'cuban-burgundy-light': '#8b4513',
        'cuban-burgundy-dark': '#4a1c1c',
        'cuban-gold': '#d4af37',
        'cuban-gold-light': '#daa520',
        'cuban-gold-dark': '#b8860b',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'wave': 'wave 2s ease-in-out infinite',
        'sway': 'sway 4s ease-in-out infinite',
        'sunset-glow': 'sunset-glow 4s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
        sway: {
          '0%, 100%': { transform: 'translateX(0px) rotate(0deg)' },
          '50%': { transform: 'translateX(5px) rotate(2deg)' },
        },
        'sunset-glow': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.9' },
          '50%': { transform: 'scale(1.02)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
};