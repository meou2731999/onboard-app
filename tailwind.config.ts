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
        secondary: "#F1ECFE",
      },
      fontFamily: {
        fontFamily: "Be_Vietnam_Pro",
      },
      fontSize: {
        "body-large-medium": [
          "16px",
          { lineHeight: "1.5", letterSpacing: "0.08px", fontWeight: "500" },
        ],
        "body-large-regular": [
          "16px",
          { lineHeight: "1.5", letterSpacing: "0.08px", fontWeight: "400" },
        ],
        "body-large-semibold": [
          "16px",
          { lineHeight: "1.5", letterSpacing: "0.08px", fontWeight: "600" },
        ],
        "body-medium-regular": [
          "14px",
          { lineHeight: "1.5", letterSpacing: "0.035px", fontWeight: "400" },
        ],
        "body-medium-semibold": [
          "14px",
          { lineHeight: "1.5", letterSpacing: "0.035px", fontWeight: "600" },
        ],
        "caption-regular": [
          "10px",
          { lineHeight: "1.5", letterSpacing: "0.05px", fontWeight: "400" },
        ],
        "caption-semibold": [
          "10px",
          { lineHeight: "1.5", letterSpacing: "0.05px", fontWeight: "600" },
        ],
        "display-small-semibold": [
          "36px",
          { lineHeight: "1.5", letterSpacing: "0px", fontWeight: "600" },
        ],
        "heading-medium-semibold": [
          "28px",
          { lineHeight: "1.5", letterSpacing: "0px", fontWeight: "600" },
        ],
        "label-large-bold": [
          "14px",
          { lineHeight: "1.5", letterSpacing: "0.014px", fontWeight: "400" },
        ],
        "title-small-regular": [
          "18px",
          { lineHeight: "1.5", letterSpacing: "0.014px", fontWeight: "400" },
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
export default config;
