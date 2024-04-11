/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        scrollAnimation: {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-184px)' },
        },
      },      
      animation: {
        scrollAnimation: 'scrollAnimation 34s linear infinite'
      },
    },
  },
  plugins: [],
}