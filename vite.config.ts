import { vitePlugin as remix } from "@remix-run/dev"
import { installGlobals } from "@remix-run/node"
import { fileURLToPath, URL } from "node:url"
import { defineConfig } from "vite"

installGlobals()

export default defineConfig({
    plugins: [
        remix({
            appDirectory: fileURLToPath(new URL("./src", import.meta.url)),
        }),
    ],
    server: {
        port: 3000,
    },
    resolve: {
        alias: {
            "~": fileURLToPath(new URL("./src", import.meta.url)),
            "~~": fileURLToPath(new URL("./", import.meta.url)),
        },
    },
})
