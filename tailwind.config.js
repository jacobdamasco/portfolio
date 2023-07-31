/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      dropShadow: {
        'sm-name-blue': '4px 4px 4px rgba(37, 99, 235, 0.3)',
        'md-name-blue': '6px 6px 6px rgba(37, 99, 235, 0.35)',
        'sm-name-green': '4px 4px 4px rgba(34, 197, 94, 0.3)',
        'md-name-green': '6px 6px 6px rgba(34, 197, 94, 0.35)',
      },
      fontSize: {
        'name': ['6rem', '6.25rem'],
        'sm-name': ['3.25rem', '4.25rem'],
        'sm-subtitle': ['1.25rem', '1.75rem'],
        'subtitle': ['1.75rem', '2.5rem'],
        'subheader': ['1.5rem', '2.25rem'],
        'sm-subheader': ['1.25rem', '2rem'],
        'sm-contact': ['2.4rem', '4.25rem'],
        'sm-contact-msg': ['1.15rem', '1.75rem'],
      }
    },
  },
  plugins: [],
}
