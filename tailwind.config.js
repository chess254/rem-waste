/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Broad coverage
    "./src/components/**/*.{js,ts,jsx,tsx}", // Specific to components
    "./src/pages/**/*.{js,ts,jsx,tsx}",     // Specific to pages
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcss(),
  ],
}