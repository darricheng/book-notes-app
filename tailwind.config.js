/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        18: "4.5rem",
      },
      minHeight: {
        app: "calc(100vh - 4.5rem)",
      },
    },
  },
  plugins: [],
};
