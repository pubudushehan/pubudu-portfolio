/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00f2fe", // Bright cyan
          dark: "#01c4d0",
          light: "#7ef9ff",
        },
        secondary: {
          DEFAULT: "#8b1eff", // Vibrant purple
          dark: "#6c15cc",
          light: "#b56fff",
        },
        accent: {
          DEFAULT: "#fe0173", // Neon pink
          dark: "#cc015d",
          light: "#ff4d9b",
        },
        dark: {
          DEFAULT: "#0a0b1e", // Deep space blue
          light: "#141537",
          lighter: "#1c1f54",
        },
        neon: {
          blue: "#00f2fe",
          purple: "#8b1eff",
          pink: "#fe0173",
          green: "#00ff9d",
        },
      },
      fontFamily: {
        sans: ["'Space Grotesk'", "Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      animation: {
        gradient: "gradient 8s linear infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        matrix: "matrix 20s linear infinite",
        circuit: "circuit 15s linear infinite",
        "spin-slow": "spin 20s linear infinite",
        "spin-slow-reverse": "spin 25s linear infinite reverse",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "matrix-rain": "matrix-rain 20s linear infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": {
            "box-shadow":
              "0 0 5px rgb(0 242 254 / 0.5), 0 0 20px rgb(0 242 254 / 0.3)",
          },
          "100%": {
            "box-shadow":
              "0 0 10px rgb(0 242 254 / 0.8), 0 0 40px rgb(0 242 254 / 0.5)",
          },
        },
        matrix: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        circuit: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 100%" },
        },
        "glow-pulse": {
          "0%, 100%": {
            "box-shadow":
              "0 0 20px rgba(0, 242, 254, 0.5), 0 0 40px rgba(139, 30, 255, 0.25)",
          },
          "50%": {
            "box-shadow":
              "0 0 40px rgba(0, 242, 254, 0.75), 0 0 60px rgba(139, 30, 255, 0.375)",
          },
        },
        "matrix-rain": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      backgroundImage: {
        "circuit-pattern": "url('/patterns/circuit.svg')",
        "grid-pattern": "url('/patterns/grid.svg')",
        "matrix-pattern": "url('/patterns/matrix.svg')",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
