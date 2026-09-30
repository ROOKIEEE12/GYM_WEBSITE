/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0E0E0E",
        secondary: "#151515",
        card: "#1C1C1C",
        accent: "#FF3B30",
        "accent-soft": "#FF5A4F",
        textPrimary: "#FFFFFF",
        textSecondary: "#A1A1A1",
        borderColor: "#2A2A2A",
      },
      fontFamily: {
        bebas: ["'Bebas Neue'", "cursive"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'btn-gradient': 'linear-gradient(135deg, #FF3B30, #FF5A4F)',
      }
    },
  },
  plugins: [],
}
