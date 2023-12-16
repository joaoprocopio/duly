import { unstable_vitePlugin as remix } from "@remix-run/dev"
import { installGlobals } from "@remix-run/node"
import { fileURLToPath, URL } from "node:url"
import { defineConfig } from "vite"

installGlobals()

export default defineConfig({
  envPrefix: "_",
  plugins: [remix()],
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("./app", import.meta.url))
    }
  },
  css: {
    modules: {
      localsConvention: "camelCaseOnly"
    }
  }
})
