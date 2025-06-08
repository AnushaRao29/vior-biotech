/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    darkMode: 'class',
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2E7D32', // Rich Green (Material UI Green 700)
          light: '#81C784', // Light Green (Material UI Green 300)
          dark: '#1B5E20', // Dark Green (Material UI Green 900)
        },
      },
      backgroundColor: theme => ({
        page: theme('colors.white'),
        card: theme('colors.white'),
      }),
      fontFamily: {
        heading: ['Playfair Display', 'serif'], // Update
        body: ['Open Sans', 'sans-serif'], // Update
      },
      ringColor: {
        'primary-light': '#6EE7B7',
      },
    },
  },
  plugins: [],
};
