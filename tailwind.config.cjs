/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      colors:{
        "background": "#0F0D13",
        "cardBackground": "#2A2141"
      }
    },
  },
  plugins: [],
}
