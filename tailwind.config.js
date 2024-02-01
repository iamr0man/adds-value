const {
  colors,
  fontFamily,
  fontSize,
  spacing,
  dropShadow,
  boxShadow,
  borderRadius,
  boxShadowColor,
  animation,
  keyframes,
} = require("./src/design/index.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors,
      fontFamily,
      fontSize,
      spacing,
      dropShadow,
      borderRadius,
      boxShadow,
      boxShadowColor,
      keyframes,
      animation,
    },
  },
  plugins: [],
};
