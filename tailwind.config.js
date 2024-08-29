/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // ...fontFamily,
        'sans': ['"Inter"', 'ui-sans-serif', 'system-ui'],
        // 'body': ['"Inter"', 'ui-sans-serif', 'system-ui'],
        // 'display': ['"Inter"', 'ui-sans-serif', 'system-ui'],
      },
      screens: {
        '3xl': '1600px',
      }
    },
  },
  plugins: [],
}

