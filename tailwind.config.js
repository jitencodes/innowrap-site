
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["var(--font-manrope)"],
      },
      screens: {
        'tab': {'max': '639px'},
        'tablet': {'max': '767px'},
        'laptop': {'max': '1023px'},
        'desktop': {'max': '1279px'},
        'monitor': {'max': '1535px'},
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(258.48deg, #2163FB -9.73%, #2623D4 110.36%);',
        'gradient-1-reverse': 'linear-gradient(258.48deg,  #2623D4 -9.73%, #2163FB 110.36%);',
        'gradient-2':  'linear-gradient(90deg, #FFFFFF 0%, #D9ECFD 60.87%, #FFFFFF 108.21%)',
        'gradient-transparent':  'linear-gradient(270deg, #E0E7EC 0%, rgba(217, 217, 217, 0) 100%)',
        'blend-img':'linear-gradient(180deg, rgba(255, 255, 255, 0) 20.23%, #212137 100%)',
        'footer-border':  'linear-gradient(to left, #9747FF, #2623D4)',
        'slider-btn':'linear-gradient(90deg, rgb(255, 255, 255,0.5) 0%, rgb(37, 52, 223,0.5) 41.32%, rgb(13, 20, 114,0.5) 100%)',
        'slider-btn-2':'linear-gradient(90deg, #FFFFFF 0%, #A8A8B9 100%)',
      },
      boxShadow:{
        'bs-1':'4px 4px 0px #212137;',
        'bs-2':'8px 8px 0px #212137;',
        'bs-3':'0px 0px 8px #8383944d;',
      },
      borderRadius:{
        'r-100':'100px'
      },
      colors:{
        'black':'#212137',
        'blue':'#2623D4',
        'light-blue':'#2163FB',
        'green':'#1D9D7A;',
        'gray':'#D9D9D9',
        'light-gray':'#C7D3DC',
        'light-bg':'#F1F4FB',
      },
    },
  },
  variants: {
    // scrollbar: ['rounded'],
  },
  plugins: [
    // require('tailwind-scrollbar'),
  ],
}
