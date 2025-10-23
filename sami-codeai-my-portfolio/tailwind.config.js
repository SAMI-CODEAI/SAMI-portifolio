/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['Fira Mono', 'monospace'],
      },
      colors: {
        green: {
          100: '#d8e5d8',
          200: '#b8d0b8',
          300: '#98bc98',
          400: '#78a878',
          500: '#5a8c5a',
          900: '#2a3c2a',
        }
      },
    },
  },
  plugins: [],
}