/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6a2c91',
        secondary: '#f7941d',
        accent: '#8a4baf',
        'primary-light': '#9d5bb9',
        'secondary-light': '#ffb74d',
        'primary-dark': '#4a1d64',
        'secondary-dark': '#d17a18',
      },
    },
  },
  plugins: [],
}