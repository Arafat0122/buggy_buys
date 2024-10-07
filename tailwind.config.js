/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add your custom font families here
        bitter: ['Bitter', 'serif'],
        fraunces: ['Fraunces', 'serif'],
        greatVibes: ['Great Vibes', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    daisyui,
  ],
}