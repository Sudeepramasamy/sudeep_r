/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
        'dev':"url('/src/assets/dev.jpg')",
        'tech':"url('/src/assets/tech.jpg')",
      },
      colors: {
        darkBlue: "#0a192f",
        lightgray:"#ccd6f6",
        deepblue:"#0a1e3f",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

