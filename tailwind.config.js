/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'mobile': '375px',
        'desktop': '1440px',
      },
      colors: {
        'green': '#c5f82a',
        'white': '#ffffff',
        'grey': '#333333',
        'darkGrey': '#1f1f1f',
        'offBlack': '#141414',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

