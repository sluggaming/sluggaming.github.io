/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Montserrat: ['Montserrat', 'sans-serif'],
      'akira-expanded': ['Akira Expanded', 'sans'],
      'kenyan-coffee': ['Kenyan Coffee', 'sans'],
    }
  },
  plugins: [],
}

