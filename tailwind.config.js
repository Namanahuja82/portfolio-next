/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode using class-based approach
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Adjust paths as needed
    './components/**/*.{js,ts,jsx,tsx}', // Adjust paths as needed
    './pages/**/*.{js,ts,jsx,tsx}', // Adjust paths as needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
