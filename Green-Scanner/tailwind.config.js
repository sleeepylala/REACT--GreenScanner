/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Definisci i colori per la modalità light
        primary: "#00BFA6",
        secondary: "#FFFFFF",
        textColor: "#263E48",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        "red-hat-display": ["Red Hat Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
