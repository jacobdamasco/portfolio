/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'off-black-1': '#121212',
      },
      fontSize: {
        'intro': '2rem',
        'name': '6.25rem',
        'section-header': '2rem',
        'subheader': '1.5rem',
      },
    },
  },
  plugins: [],
}
