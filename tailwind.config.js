import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}