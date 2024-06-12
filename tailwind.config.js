/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  darkMode:"class",
  theme: {
    extend: {
      backgroundImage: { 
        'name' : "url('../image/recipe-baner-1.png')"
      }
    },
    screens:{
      "mobile":"340px",
      "desktop":"1000px",
    },
    
  
  },
  plugins: [],
};
