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
        inter:"'Inter', sans-serif;"
      },
      colors:{
        darkPrimary:'#1d232a',
        blackText:'#3d3d3d'
      },
    },

  },
  daisyui:{
    theme:false
  },
  plugins: [daisyui],
}