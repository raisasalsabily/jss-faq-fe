/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "serif"],
    },
    extend: {
      colors: {
        current: "currentColor",
        blue: {
          pale: "#5B80BC",
        },
        orange: "#FFB703",
      },
    },
  },
  plugins: [],
}
