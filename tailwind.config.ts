import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#6B00D9",
          50: "#F4E6FF",
          100: "#E9CCFF",
          200: "#D299FF",
          300: "#BC66FF",
          400: "#A533FF",
          500: "#6B00D9",
          600: "#5C00B8",
          700: "#4D0097",
          800: "#3E0076",
          900: "#2F0055",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#A533FF",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#800080",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#2F0055",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#BC66FF",
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "#3E0076",
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "#4D0097",
          foreground: "#ffffff",
        },
        sidebar: {
          DEFAULT: "#2F0055",
          foreground: "#ffffff",
          primary: "#6B00D9",
          "primary-foreground": "#ffffff",
          accent: "#A533FF",
          "accent-foreground": "#ffffff",
          border: "#4D0097",
          ring: "#6B00D9",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(107, 0, 217, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 30px rgba(107, 0, 217, 0.6)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-in": {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        "slow-pan": {
          "0%": {
            backgroundPosition: "0 0",
          },
          "100%": {
            backgroundPosition: "100px 100px",
          },
        },
        scan: {
          "0%": {
            top: "0%",
          },
          "100%": {
            top: "100%",
          },
        },
        "ping-slow": {
          "0%": {
            transform: "scale(1)",
            opacity: "1",
          },
          "75%, 100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        glow: "glow 2s ease-in-out infinite",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
        "slow-pan": "slow-pan 15s linear infinite",
        scan: "scan 3s linear infinite",
        "ping-slow": "ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "cyber-grid":
          "linear-gradient(rgba(107, 0, 217, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(107, 0, 217, 0.1) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "50px 50px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
