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
        iviPrimary: "#1E88E5",
        iviSecondary: "#FFB74D",
        iviBackground: "#F5F5F5",
        iviText: "#333333",
        iviExtra: "#E0E0E0",
        iviExtra2: "#FFFFFF",
        iviShadow: "#64748B",

        //oscuro
        iviPrimaryDark: "#64B5F6",
        iviSecondaryDark: "#FFA726",
        iviBackgroundDark: "#121212",
        iviTextDark: "#E0E0E0",
        iviExtraDark: "#424242",
        iviExtra2Dark: "#1E88E5",
        iviShadowDark: "",
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
