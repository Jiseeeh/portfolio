/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        catamaran: ["Catamaran", "sans-serif"],
        metrophobic: ["Metrophobic", "sans-serif"],
        orienta: ["Orienta", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
