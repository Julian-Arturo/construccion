/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        'w-screen1': '200vw',
      
      },

      screens: {
        'smxl': '430px',
      },

    },
  },
  plugins: [],
}
