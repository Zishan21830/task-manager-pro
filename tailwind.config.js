/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors : {
      green : "#3F9142",
      lightGreen : "#ebf3ec",
    },
    fontFamily : {
      poppins : ["Poppins", "serif"],
      sen : ["Sen", "serif"],
    }
  },
  plugins: [],
}