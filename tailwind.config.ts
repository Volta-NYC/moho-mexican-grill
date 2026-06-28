import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#15130d",
        paper: "#f0dfbd",
        tomato: "#d94a20",
        olive: "#007a68",
        cream: "#fff4d7",
        gold: "#f4bf24"
      },
      fontFamily: {
        heading: ["var(--font-brand-family)", "var(--font-body-family)", "Arial", "sans-serif"],
        body: ["var(--font-body-family)", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
}

export default config
