/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation:{
          rotate:'rotate 2s linear infinite'
      },
      keyframes:{
         rotate:{
          to:{
            transform: 'scale(1.05) translateY(-44px) rotate(360deg) translateZ(0)',
          }
         }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        c1:"#000000",
        c2:"#7510F7",
        c3:"#5BE9B9",//cyan
        c4:"#141C3A"
      },
      fontFamily:{
        Pirata:['Pirata One','sans'],
        poppins:['Poppins','sans']
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["synthwave", "cupcake"],
  },
}
