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
        "sharp-shadow" : "0 6px 0 0 rgb(180,165,151)"
      }
    },
  },
  plugins: [],
}

