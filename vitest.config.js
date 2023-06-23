import { fileURLToPath, URL } from "node:url";
import { mergeConfig } from "vite";
import { configDefaults, defineConfig } from "vitest/config";

import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
      reporters: "verbose",
      include: [...configDefaults.include],
      exclude: [...configDefaults.exclude],
      setupFiles: ["./lib/vitest/setup.js"],
      root: fileURLToPath(new URL("./", import.meta.url)),
      transformMode: {
        web: [/\.[jt]sx$/],
      },
    },
  })
);
