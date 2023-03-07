/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'SFProText': ['SFProText-Regular'],
      },
      colors: {
          'ground': '#F7F8FA',
          'nortext': '#535066',
      }},
  },
  plugins: [],
}
