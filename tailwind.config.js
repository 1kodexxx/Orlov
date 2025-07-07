/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#EFE393", contrast: "#1a1a1a" },
        secondary: "#2C2C2C",
        background: {
          DEFAULT: "#181818",
          paper: "#222222",
        },
        text: {
          primary: "#EFE393",
          secondary: "#CCCCCC",
        },
        corporate: {
          success: "#A2E3C4",
          error: "#FFB3B3",
          info: "#9ECFFF",
          warning: "#FCE38A",
          surface: "#3A3A3A",
        },
      },
    },
  },
  plugins: [],
};
