/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
    extend: {
      colors: {
        "bg-soft": "#FFF5F7",
        "bg-gradient-start": "#FFF8FA",
        "bg-gradient-end": "#F3E8FF",
        primary: "#FF8FAB",
        secondary: "#9D4EDD",
        accent: "#74C0FC",
        text: {
          main: "#4A4A6A",
          secondary: "#6B5B8A",
          light: "#9CA3AF",
        },
        cream: "#FFFFFF",
        rose: "#FFB3C1",
        lavender: "#E9D8FD",
        sky: "#DBEAFE",
        mint: "#F0FFF4",
        amber: "#FFD43B",
        blush: "#FCE7F3",
        lilac: "#DDD6FE",
        periwinkle: "#C7D2FE",
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', '"Playfair Display"', "serif"],
        display: ['"Playfair Display"', '"Noto Serif SC"', "serif"],
        sans: ['"Noto Sans SC"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      boxShadow: {
        "soft-pink": "0 8px 32px rgba(255, 143, 171, 0.25)",
        "soft-purple": "0 8px 32px rgba(157, 78, 221, 0.2)",
        "soft-blue": "0 8px 32px rgba(116, 192, 252, 0.2)",
        "float": "0 20px 40px rgba(255, 143, 171, 0.15)",
        "glow-pink": "0 0 30px rgba(255, 143, 171, 0.4)",
        "glow-purple": "0 0 30px rgba(157, 78, 221, 0.4)",
        "glow-blue": "0 0 30px rgba(116, 192, 252, 0.4)",
        "card": "0 4px 20px rgba(74, 74, 106, 0.08)",
        "card-hover": "0 12px 40px rgba(74, 74, 106, 0.15)",
      },
      borderRadius: {
        "soft": "20px",
        "rounded-full": "9999px",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "bounce-soft": "bounce-soft 2s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(2deg)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: 0.6 },
          "50%": { opacity: 1 },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "bounce-soft": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundImage: {
        "gradient-soft": "linear-gradient(135deg, #FFF5F7 0%, #F3E8FF 50%, #E0F2FE 100%)",
        "gradient-warm": "linear-gradient(135deg, #FF8FAB 0%, #9D4EDD 50%, #74C0FC 100%)",
        "gradient-cool": "linear-gradient(135deg, #74C0FC 0%, #9D4EDD 50%, #FF8FAB 100%)",
      },
    },
  },
  plugins: [],
};
