/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#ebc30e",
        secondary: "#3c3116",
        tertiary: "#e47c84",
        quaternary: "#97aa52",
        quinary: "#b0cdaf",
        senary: "#2e3424",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        head: ["Secular One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
