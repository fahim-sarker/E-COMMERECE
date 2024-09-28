/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['DM Sans', 'sans-serif']
    },
    backgroundImage:{
      'arr':"url(./src/assets/arr1.png)",
      'arr1':"url(./src/assets/arr2.png)",
      'arr2':"url(./src/assets/arr3.png)",
      'arr3':"url(./src/assets/arr4.png)",
    }
    
  },

}
