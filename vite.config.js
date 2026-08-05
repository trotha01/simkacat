import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // The SSR pass (see scripts/prerender.mjs) only needs to produce markup; the
    // client pass already emitted the assets, and both derive the same content
    // hashes, so emitting a second copy here would be dead weight in dist-ssr.
    ssrEmitAssets: false,
  },
})
