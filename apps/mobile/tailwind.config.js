/** @type {import('nativewind').NativeWindConfig} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "../../packages/ui/**/*.{js,jsx,ts,tsx}",
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
