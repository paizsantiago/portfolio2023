/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '4': 'repeat(4, minmax(0, 200px))',
      },letterSpacing: {
        widest: '.40em',
      },backgroundImage: {
        'fondo': "url('./fondo.png')"
        ,'fondo3': "url('./fondo3.png')",
        'fondoMain': "url('./fondoMain.png')"
      }
    },
  },
  plugins: [],
}
