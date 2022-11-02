/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        18: "4.5rem",
      },
      minWidth: {
        256: "256px",
      },
      maxWidth: {
        256: "256px",
      },
      minHeight: {
        app: "calc(100vh - 4.5rem)",
        216: "216px",
      },
    },
  },
  plugins: [],
};
