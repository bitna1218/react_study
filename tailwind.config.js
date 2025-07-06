/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        cardFlipDown: {
          '0%': { transform: 'rotateX(0deg)', transformOrigin: 'top' },
          '25%': { transform: 'rotateX(-45deg)', transformOrigin: 'top' },
          '50%': { transform: 'rotateX(-90deg)', transformOrigin: 'top' },
          '75%': { transform: 'rotateX(-135deg)', transformOrigin: 'top' },
          '100%': { transform: 'rotateX(-180deg)', transformOrigin: 'top' },
        },
      },
      animation: {
        cardFlipDown: 'cardFlipDown 1s ease-in-out forwards infinite',
      },
    },
  },
  plugins: [],
};

