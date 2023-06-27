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
        'contactBg': "url('./assets/pics/contactBg.png')"
        ,'projectsBg': "url('./assets/pics/projectsBg.png')",
        'mainBg': "url('./assets/pics/mainBg.png')"
      }
    },
  },
  plugins: [],
}
