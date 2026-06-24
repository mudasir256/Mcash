import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#5B5CFF",
          50: "#EEEEFF",
          100: "#E0E0FF",
          200: "#C7C7FF",
          300: "#A8A8FF",
          400: "#8385FF",
          500: "#5B5CFF",
          600: "#4A4BE6",
          700: "#3D3EC2",
        },
        ink: {
          DEFAULT: "#101828",
          muted: "#667085",
          soft: "#98A2B3",
        },
        line: "#EAECF0",
        surface: "#F9FAFB",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(16, 24, 40, 0.06), 0 1px 2px rgba(16, 24, 40, 0.04)",
        soft: "0 8px 24px rgba(16, 24, 40, 0.06)",
        btn: "0 8px 20px rgba(91, 92, 255, 0.35)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #6E6CFF 0%, #5B5CFF 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
