export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#07090f",
        foreground: "#f8fafc",
        primary: "#5b8cff",
        gold: "#c7a86b",
        graphite: "#10131a",
        slatepanel: "#151a24",
        "muted-foreground": "#9aa8bd",
      },
      boxShadow: {
        glow: "0 24px 90px rgba(91, 140, 255, 0.18)",
        gold: "0 18px 70px rgba(199, 168, 107, 0.14)",
      },
      keyframes: {
        "gradient-drift": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(0, -24px, 0) scale(1.03)" },
        },
        sheen: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
      },
      animation: {
        "gradient-drift": "gradient-drift 12s ease-in-out infinite",
        sheen: "sheen 3.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
