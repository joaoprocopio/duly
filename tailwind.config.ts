import { type Config } from "tailwindcss"

export default {
  important: true,
  corePlugins: {
    preflight: false
  },
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {}
  },
  plugins: []
} satisfies Config
