const plugin = require('tailwindcss/plugin')
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
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      scale: {
        flip: '-1'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)'},
          '20%, 60%': { transform: 'rotate(-15deg)' },
          '40%, 80%': { transform: 'rotate(15deg)' }
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        slideUpOut: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(100%)" }
        },
        slideUpIn: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" }
        }
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out",
        fadeIn: "fadeIn 1s ease-in forwards",
        slideUpOut: "slideUpOut 200ms ease-in-out both",
        slideUpIn: "slideUpIn 200ms ease-in-out both"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
  variants: ['motion-safe']
}
