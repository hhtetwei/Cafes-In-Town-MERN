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
      colors: {
        headerBg: '#8D7B68',
        footerBg: '#A4907C',
        tabsColor: '#C8B6A6',
        cardBorder: '#EBE3D5',
        textClr: '#B0A695',
        inputBorderClr: '#B0A695',
        warningClr: '#A0153E',
      },
    },
  },
  plugins: [],
};
