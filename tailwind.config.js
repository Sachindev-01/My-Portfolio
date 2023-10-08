/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "font-calibre": [
          "Calibre",
          "Inter",
          "San Francisco",
          "SF Pro Text",
          "-apple-system",
          "system-ui",
          "sans-serif",
        ],
        "font-mono": ["Roboto Mono", "monospace"],
        "font-nunito": ["Nunito", "sans-serif"],
      },
      boxShadow: {
        card: "0 0 10px #aad4f7",
      },
    },
  },
  plugins: [],
};
