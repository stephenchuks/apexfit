/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}", // For shared UI
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0d9488",
        secondary: "#64748b",
        background: "#ffffff",
        foreground: "#171717",
      },
      borderRadius: {
        xl: "1rem",
      },
    },
  },
  plugins: [],
};
