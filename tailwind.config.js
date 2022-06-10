const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      height : {
        "93PercHeight" : "93%"
      }, 
      minHeight: {
        "minHeight" : "100%"
      },
      fontFamily : {
        sans : ['Inter', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
