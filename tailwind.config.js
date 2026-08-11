/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        professional: {
          50: '#fcfaf8',
          100: '#f4ece5',
          500: '#b4846c',
          600: '#946651',
          700: '#754f3f',
          900: '#3e2921',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
