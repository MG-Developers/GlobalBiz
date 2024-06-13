// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#102C57",
        "light-cream": "#FEFAF6",
        "gb-yellow": "#FFC200",
        "gb-red": "#D71313",
        "gb-green": "#0A6847",
        "gb-bg-1": "#1C1D20",
        "gb-card-1": "#1F2123",
        "gb-gray": "#E2DFD0",
        "gb-gray-2": "#686a6c",
        "gb-gray-3": "#aeafaf",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
