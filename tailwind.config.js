import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        trioBangla:"'Tiro Bangla', serif;",

      },
      colors:{
        darkPrimary:'#1d232a'
      }
    },
  },
  daisyui:{
    theme:false
  },
  plugins: [daisyui],
}