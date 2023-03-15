/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        footer: "#E3F2FD",
        bgLight: "#FAFAFA",
        modal: "#686963",
        btn: "#DB5461",
        header: "#8AA29E",
      },
    },
  },
  plugins: [],
};
