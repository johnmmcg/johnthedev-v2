const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,astro,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      'sans': ["'Nunito'", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      scale: {
        flip: '-1'
      },
      keyframes: {
        wiggle: {
          '50%': { transform: 'rotate(-15deg)' },
          '25%, 75%': { transform: 'rotate(15deg)' },
          '0, 100%': { transform: 'rotate(0deg)'}
        }
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out',
      }
    },
  },
  plugins: [],
}
