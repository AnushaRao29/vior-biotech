/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const theme = {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#16A34A', // Tailwind’s emerald-600
        light: '#6EE7B7', // emerald-300
        dark: '#065F46', // emerald-800
      },
    },
    backgroundColor: theme => ({
      page: theme('colors.white'),
      card: theme('colors.white'),
    }),
    fontFamily: {
      heading: ['Playfair Display', 'serif'], // Update
      body: ['Source Sans Pro', 'sans-serif'], // Update
    },
  },
};
export const plugins = [];
