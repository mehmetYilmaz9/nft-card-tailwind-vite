/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ]
  ,theme: {
    screens: {
      sm: '375px',
      xl: '1440px'
    },
    extend: {
      colors: {
        softBlue: 'hsl(215, 51%, 70%)',
        cyan: 'hsl(178, 100%, 50%)',
        white: ' hsl(0, 0%, 100%)',

        veryDarkBlueMainBG: 'hsl(217, 54%, 11%)',
        veryDarkBlueCardBG: 'hsl(216, 50%, 16%)',
        veryDarkBlueLine: 'hsl(215, 32%, 27%)',
      },
      shadow: {
        '2xl' : [
          '0px 20px 25px 15px rgba(0, 0, 0, 0.05)',
          '0px 40px 30px 15px rgba(0, 0, 0, 0.1)'
        ]
      },
      fontFamily: {
        'persoFont': ['Outfit', ] 
      }
    },
  },
  plugins: [],
}
