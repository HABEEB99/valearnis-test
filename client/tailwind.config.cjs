/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        header: "#C1C1C1",
        bgLight: "#FFFFFF",
        bgDark: "#2C4251",
        btn1: "#D16666",
        btn2: "#B6C649",
      },
    },
  },
  plugins: [],
};
