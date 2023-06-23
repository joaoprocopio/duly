import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
  },
  preview: {
    host: true,
    port: 3001,
  },
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("./src", import.meta.url)),
      "@": fileURLToPath(new URL("./", import.meta.url)),
    },
  },
});
