/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FD8B51',
        secondary: '#257180',
        tertiary: '#F2E5BF',
      }
    },
  },
  plugins: [],
}