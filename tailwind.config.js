/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'background': '#1a1a23',
        'background-light': '#F8F8FF',
        'text': '#FAF9F6',
        'text_light': '#454545',
        'blue': '#0080FF',
        'orange': '#fc9800'
      },
      fontFamily: {
        'caveat': ['Caveat', 'sans-serif'] 
      },
    },
  },
  plugins: [],
}
