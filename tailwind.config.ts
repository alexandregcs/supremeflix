import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      colors: {
        night: {
          950: "#020611",
          900: "#050918",
          850: "#090d1d",
          800: "#0d1224",
          750: "#11172a",
        },
        supreme: {
          red: "#ff3659",
          pink: "#ed4c9a",
          purple: "#8b5cf6",
          blue: "#18a5ff",
        },
      },
      boxShadow: {
        "supreme-button": "0 12px 34px rgba(237, 76, 154, 0.34)",
        "supreme-card": "0 24px 70px rgba(13, 18, 36, 0.38)",
        "supreme-glow": "0 0 0 1px rgba(237, 76, 154, 0.48), 0 0 34px rgba(139, 92, 246, 0.24)",
      },
      backgroundImage: {
        "supreme-gradient": "linear-gradient(135deg, #ff3659 0%, #9c50ff 54%, #0ca8ff 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
