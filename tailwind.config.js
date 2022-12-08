/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        "pink": "#fdadad",
        "black": "#082031"
      },
      backgroundColor: "#fff5f5",
      fontFamily: {
        sans: ['Charter']
      }
    },
  },
  plugins: [],
}
