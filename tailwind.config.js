/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    colors:{
      gray:'#36454f',
      graylight:'#5C6575',
      bordergray:'#D1D5DB',
      hoverGray:'#F0F0F0',
      purple:'#820AD1',
      green:'#00AA00'
    }
    
    },
  },
  plugins: [],
};
