/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        green: {
          1: '#e6f0df',
          2: '#daf1de',
          3: '#73c473',
          4: '#235347',
          5: '#163832',
          6: '#0b2b26',
          7: '#051f20',  
        }
      },
      dropShadow: {
        1: '4px 4px 4px rgba(230, 240, 221, 0.5)'
      },
    },
  },
  plugins: [],
}
