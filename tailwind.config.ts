import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        iviPrimary: "#1E88E5",
        iviSecondary: "var(--iviSecondary)",
        iviBackground: "var(--iviBackground)",
        iviText: "var(--iviText)",
        iviExtra: "#E0E0E0",
        iviShadow: "#64748B",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1s steps(2, start) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
