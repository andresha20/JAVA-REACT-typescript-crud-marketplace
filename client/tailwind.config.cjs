/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        default: '#F0A830',
      },
      secondary: {
        default: '#FCEBB6',
      },
    },
    extend: {},
  },
  plugins: [],
}
