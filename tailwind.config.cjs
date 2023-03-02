/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#EFFFFD",
        color2: "#B8FFF9",
        color3: "#85F4FF",
        color4: "#0DCEDA",
        color5: "#06283D",
        color6: "#00A3FF",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
