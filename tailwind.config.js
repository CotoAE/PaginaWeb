/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Consolas', 'monospace'], // Establece Consolas como la fuente predeterminada
      },
    },
  },
  plugins: [],
}