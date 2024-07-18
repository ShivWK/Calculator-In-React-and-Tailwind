/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mine : "'League Spartan', sans-serif",
      },
      boxShadow: {
        'custom': '0 6px 0 0 var(--tw-shadow-color)',
      },
    },
  },
  plugins: [],
}

