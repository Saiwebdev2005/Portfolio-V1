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
        slidein: {
          from: {
            opacity: "0",
            transform: "translatey(-30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        breath: {
          "0%": { "font-variation-settings": '"wght" 32' },
        },
        "100%": { "font-variation-settings": '"wght" 240' },
      },
      animation: {
        slidein500: "slidein 1s ease 500ms forwards",
        slidein700: "slidein 1s ease 700ms forwards",
        slidein1000: "slidein 1s ease 1000ms forwards",
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
