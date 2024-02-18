/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        breath: {
          "0%": { "font-variation-settings": '"wght" 32' },
        },
        "100%": { "font-variation-settings": '"wght" 240' },
      },
      colors: {
        c1: "#000000",
        c2: "#7510F7",
        c3: "#5BE9B9", //cyan
        c4: "#141C3A",
      },
      fontFamily: {
        Pirata: ["Pirata One", "sans"],
        poppins: ["Poppins", "sans"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["synthwave", "cupcake"],
  },
};
