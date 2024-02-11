/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "soft-blue": "#8BACD9", 
        "white": "#FFFFFF", 
        "cyan": "#00FFF8", 
        "very-dark-blue-1": "#0D192C",
        "very-dark-blue-2": "#15263F",
        "very-dark-blue-3": "#2E405A" 
      }, 
      fontFamily:{
        "sans": ["Outfit"]
      }
    },
  },
  plugins: [],
}

