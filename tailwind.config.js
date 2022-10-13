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
    extend: {},
  },
  plugins: [],
}
