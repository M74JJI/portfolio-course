import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["var(--font-oswald)"],
        pixel: ["var(--font-pixel)"],
      },
      screens: { xs: "520px", "2xl": "1400px" },
      colors: {
        primary: {
          background: "rgba(255, 255, 255, .05)",
          foreground: "#fff",
        },
        secondary: {
          background: "rgba(255, 255, 255, .03)",
          foreground: "rgba(255,255,255,0.4)",
        },
        blue: {
          joust: "#56acff",
          cosmos: "#003049",
          hera: "#7179ef",
        },
        green: {
          benzol: "#00d372",
        },
        pink: {
          ice: "#d87cac",
        },
        border: "rgb(255 255 255 / 0.05)",
      },
      backgroundImage: {
        grain: "url(/assets/images/background/noisy-background.png)",
      },
      animation: {
        "noisy-bg": "noise 1s steps(2) infinite",
      },
      keyframes: {
        noise: {
          "0%": {
            transform: "translate3d(0, 9rem, 0)",
          },
          "10%": {
            transform: "translate3d(-1rem, -4rem, 0)",
          },
          "20%": {
            transform: "translate3d(-8rem, 2rem, 0)",
          },
          "30%": {
            transform: "translate3d(9rem, -9rem, 0)",
          },
          "40%": {
            transform: "translate3d(-2rem, 7rem, 0)",
          },
          "50%": {
            transform: "translate3d(-9rem, -4rem, 0)",
          },
          "60%": {
            transform: "translate3d(2rem, 6rem, 0)",
          },
          "70%": {
            transform: "translate3d(7rem, -8rem, 0)",
          },
          "80%": {
            transform: "translate3d(-9rem, 1rem, 0)",
          },
          "90%": {
            transform: "translate3d(6rem, -5rem, 0)",
          },
          to: {
            transform: "translate3d(-7rem, 0, 0)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
