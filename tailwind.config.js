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
          '20%, 60%': { transform: 'rotate(-15deg)' },
          '40%, 80%': { transform: 'rotate(15deg)' },
          '0%, 100%': { transform: 'rotate(0deg)'}
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out',
        fadeIn: "fadeIn 1s ease-in forwards"
      }
    },
  },
  plugins: [],
  variants: ['motion-safe']
}
