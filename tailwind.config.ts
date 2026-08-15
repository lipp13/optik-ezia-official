import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      colors: {
        ivory: {
          DEFAULT: "#FAF8F5",
          warm: "#F4F0E8",
          dark: "#EAE4D8",
        },
        sand: {
          light: "#F5F2EC",
          DEFAULT: "#EDE7DC",
          dark: "#DBD2C3",
          border: "#E2DAD0",
        },
        charcoal: {
          DEFAULT: "#171715",
          deep: "#0F0F0E",
          muted: "#54524D",
          light: "#8C8982",
          subtle: "#B8B5AD",
        },
        accent: {
          terracotta: "#8E5238",
          olive: "#4A5445",
          gold: "#C2A478",
          sienna: "#A45A3E",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
        display: ["var(--font-display)", "Plus Jakarta Sans", "sans-serif"],
        serif: ["var(--font-serif)", "Newsreader", "Georgia", "serif"],
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
        800: "800ms",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 4s ease-in-out infinite",
        "bounce-slow": "bounceSlow 3s ease-in-out infinite",
        "rotate-slow": "rotateSlow 20s linear infinite",
        "slide-left": "slideLeft 30s linear infinite",
        "slide-right": "slideRight 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-8px) rotate(1deg)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        rotateSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        slideLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        slideRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.03)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.06)',
        'hard': '0 20px 60px rgba(0, 0, 0, 0.12)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};

export default config;
