import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  base: './',
  build: {
    sourcemap: false,
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  plugins: [react({
    babel: {
      plugins: [
        'react-dev-locator',
      ],
    },
  }), tsconfigPaths(), cloudflare()],
})