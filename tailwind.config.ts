import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-scale": {
          10: "#FFFFFF",
          15: "#F9FAFC",
          20: "f4f4f4",
          40: "#A1A1A1",
          60: "#737373",
          80: "#434343",
          100: "#1D1D1D",
        },
        primary: "#8F47FF",
        disable: "#D4BBF7",
        neutral: "#1D1D1D",
      },
      fontFamily: {
        fontFamily: "Be_Vietnam_Pro",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
export default config;
