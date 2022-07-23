/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "public/indexx.js",
    "./node_modules/flowbite/**/*.js",
    
  ],
  theme: {
    extend: {
      fontFamily:{
      body:['Montserrat']
    },
      colors:{
        'btnColor':'#474141',
      },
      backgroundImage: {
        'hero': "url('img/hero.jpg')",
        
      },
      
  },
  },
  plugins: [
    require('flowbite/plugin')
],
}
