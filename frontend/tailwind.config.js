/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{tsx, jsx, ts}"],
  theme: {
    extend: {
      fontFamily: {
        meditate: ["Meditate", "sans-serif"],
      },
      screens: {
        xxs: "300px",
      },
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
};
