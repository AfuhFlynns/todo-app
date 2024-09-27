/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        main: "var(--main-width)",
      },
      height: {
        main: "var(--main-height)",
      },
    },
  },
  plugins: [],
};
