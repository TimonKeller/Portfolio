/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1a1a23",
        "background-light": "#F7F3E3",
        text: "#FAF9F6",
        text_light: "#454545",
        blue: "#7D53DE",
        pink: "#00A8E8",
      },
      fontFamily: {
        caveat: ["Caveat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
