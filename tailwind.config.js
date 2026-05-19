/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#a40031',
        'primary-dark': '#840031',
      },
    },
  },
  plugins: [],
}
