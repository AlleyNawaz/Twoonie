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
        "bg-base": "#0A0F1A",
        "bg-tint": "#0F1623",
        "bg-elevated": "#161D2E",
        "bg-surface": "#1E2740",
        accent: "#FF6B35",
        "accent-bright": "#FFA572",
        secondary: "#FFD23F",
        success: "#10B981",
        danger: "#EF4444",
      },
      fontFamily: {
        sans: ["Geist", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
