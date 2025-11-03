/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", // enables dark mode toggle support
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: "#7C3AED",
          light: "#A78BFA",
          dark: "#5B21B6",
        },
        accent: "#6EE7B7",
      },
      boxShadow: {
        soft: "0 2px 4px rgba(0, 0, 0, 0.06)",
        card: "0 4px 8px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
};
