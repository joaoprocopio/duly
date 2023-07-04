import { type Config } from "tailwindcss"

const config: Config = {
  important: true,
  // remover o preflight
  corePlugins: {
    preflight: false
  },
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {}
  },
  plugins: []
}

export default config
