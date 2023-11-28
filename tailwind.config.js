/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        c1:"#000000",
        c2:"#7510F7",
        c3:"#5BE9B9",
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
