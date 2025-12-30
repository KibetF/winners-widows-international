import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Deep Burgundy/Maroon (Dignity, Warmth, African Earth)
        primary: {
          50: "#fdf2f3",
          100: "#fce7e9",
          200: "#f9d2d6",
          300: "#f4adb4",
          400: "#ec7d8a",
          500: "#e04d62",
          600: "#cc2d4a",
          700: "#ab223c",
          800: "#8f1f37",
          900: "#722F37", // Main Primary
          950: "#460d18",
        },
        // Secondary - Soft Gold (Hope, Prosperity, Sunrise)
        secondary: {
          50: "#fdfbeb",
          100: "#fcf5c8",
          200: "#f9ea8c",
          300: "#f5d94f",
          400: "#D4AF37", // Main Secondary
          500: "#c49a1a",
          600: "#a97812",
          700: "#875612",
          800: "#704516",
          900: "#603a18",
        },
        // Accent - Forest Green (Growth, Sustainability, Land)
        accent: {
          50: "#f0fdf0",
          100: "#dcfcdc",
          200: "#bbf7bb",
          300: "#86ef86",
          400: "#4ade4a",
          500: "#228B22", // Main Accent
          600: "#1a7a1a",
          700: "#186118",
          800: "#184d18",
          900: "#164016",
        },
        // Neutrals - Warm tones
        neutral: {
          50: "#FAF9F6", // Warm white - backgrounds
          100: "#F5F4F0",
          200: "#E8E6E1",
          300: "#D3D0C9",
          400: "#A8A49C",
          500: "#787470",
          600: "#5C5955",
          700: "#454340",
          800: "#2D2C2A",
          900: "#1A1918",
        },
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-lato)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
