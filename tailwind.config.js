/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "serif"],
    },
    fontSize: {
      "h-xl": ["3rem", "4.5rem"], // 48px
      "h-lg": ["2rem", "3rem"], // 32px
      "h-md": ["1.5rem", "2.25rem"], // 24px
      "h-sm": ["1.25rem", "1.875rem"], // 20px
      "b-xl": ["1.125rem", "2rem"], // 18px
      "b-lg": ["1rem", "1.75rem"], // 16px
      "b-md": ["0.875rem", "1.5rem"], // 14px
      "b-sm": ["0.75rem", "1.3rem"], // 12px
    },
    colors: {
      current: "currentColor",
      white: "#FFF",
      black: "#000",
      neutral: {
        100: "#E6E6E6",
        200: "#CCCCCC",
        300: "#B3B3B3",
        400: "#999999",
        500: "#808080",
        600: "#666666",
        700: "#4D4D4D",
        800: "#333333",
        900: "#1A1A1A",
      },
      teal: {
        50: "#9CDCD1",
        100: "#6BCAB9",
        300: "#39B9A2",
        500: "#08A78B",
        700: "#06866F",
        900: "#067561",
      },
      blue: {
        50: "#A3B9C5",
        100: "#7697A9",
        300: "#48748C",
        500: "#1A516F",
        700: "#154159",
        900: "#103143",
      },
      red: {
        50: "#F3B5BC",
        100: "#EE909A",
        300: "#E86B79",
        500: "#E24657",
        700: "#B53846",
        900: "#882A34",
      },
      yellow: {
        50: "#FFE999",
        100: "#FFDD66",
        300: "#FFD233",
        500: "#FFC700",
        700: "#CC9F00",
        900: "#997700",
      },
    },
  },
  plugins: [],
}
