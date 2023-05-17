/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      boxShadow:{
          '3xl': '-2px 21px 30px -20px rgba(34, 60, 80, 0.18)',
          '4xl': '-1px 1px 7px 1px rgba(34, 60, 80, 0.2)',
      },
      padding:{
        'wpad': '10px 25px',
        'p-btn': '5px 15px',
        'cpad': '18px 15px',
      },
      width:{
        "600": "600px",
      }
      
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })
    })
  ],
}

