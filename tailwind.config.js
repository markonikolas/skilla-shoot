/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "!./node_modules",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ["var(--font-jost)"],
        barlow: ["var(--font-barlow)"],
      },
      backgroundImage: {
        hero: "url('../assets/images/hero-03.jpg')",
      },
    },
  },
  plugins: [],
};
