import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#161A2C",
        canvas: "#F5F7FC",
        line: "#E1E6F0",
        muted: "#5B6272",
        brand: {
          blue: "#1E3A8A",
          "blue-tint": "#93C5FD",
          teal: "#14B8A6",
          "teal-tint": "#5EEAD4",
          orange: "#F97316",
          "orange-tint": "#FDBA74",
        },
      },
      fontFamily: {
        display: ["var(--font-d)"],
        body: ["var(--font-b)"],
      },
      boxShadow: {
        glossy:
          "inset 0 -6px 10px rgba(0,0,0,0.12), inset 0 4px 8px rgba(255,255,255,0.5), 0 12px 22px -12px rgba(22,26,44,0.3)",
        "glossy-active":
          "inset 0 -6px 10px rgba(0,0,0,0.12), inset 0 4px 8px rgba(255,255,255,0.6), 0 18px 30px -10px rgba(22,26,44,0.4)",
        card: "0 24px 44px -24px rgba(22,26,44,0.18)",
        "card-hover": "0 24px 40px -22px rgba(22,26,44,0.2)",
        panel: "0 22px 40px -26px rgba(22,26,44,0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
