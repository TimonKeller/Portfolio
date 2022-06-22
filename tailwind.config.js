/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'background': '#1A1A1A',
        'text': '#FAF9F6',
        'violet': '#8A50E8'
      },
      fontFamily: {
        'caveat': ['Caveat', 'sans-serif'] 
      },
    },
  },
  plugins: [],
}
