/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#161622',  // Example primary color
        
        // Secondary colors with specific shades
        secondary: {
          DEFAULT: '#4A90E2',   // DEFAULT shade for secondary
          100: '#B0D8FD',       // Shade 100 for secondary
          200: '#7EC5F5',       // Shade 200 for secondary
        },
        
        // Black and gray colors with shades
        black: '#000000',       // Example black color
        gray: {
          100: '#F3F4F6',       // Light gray
          200: '#E5E7EB',       // Medium gray
          300: '#D1D5DB',       // Dark gray
        },
      },
    },
    fontFamily: {
      pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
    },
  },
  plugins: [],
}
