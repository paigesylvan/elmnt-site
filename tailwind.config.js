/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./src/**/*.{ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          poppins: ["var(--font-poppins)", "sans-serif"],
        },
      },
    },
    plugins: [],
  };