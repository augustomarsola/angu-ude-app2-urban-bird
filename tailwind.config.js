/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    container: {
      padding: "3rem",
    },
    extend: {
      colors: {
        primary: "#1D4ED8",
      },
    },
  },
  plugins: [],
};
