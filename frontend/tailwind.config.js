/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{tsx, jsx, ts}"],
  theme: {
    extend: {
      fontFamily: {
        meditate: ["Meditate", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
};
