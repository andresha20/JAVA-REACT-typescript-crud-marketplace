/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/layouts/*.{js,jsx,ts,tsx}",
    "./src/pages/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      green: colors.emerald,
      yellow: colors.amber,
      purple: colors.violet,
      white: colors.white,
      indigo: colors.indigo,
      blue: colors.blue,
      red: colors.red,
      yellow: colors.yellow,
      black: colors.black,
      gray: colors.gray,
      pink: colors.pink,
      orange: colors.orange,
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        default: '#181818',
      },
      secondary: {
        default: '#FCEBB6',
      },
    },
    extend: {
      
    },  
  },
  plugins: [],
}
