import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // Design options for the "Top actors" grid; review page, not linked from the site.
        actorsOptions: resolve(__dirname, 'actors-options.html'),
      },
    },
  },
})
