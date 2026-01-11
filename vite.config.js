import { defineConfig } from 'vite'

export default defineConfig({
  base: '/integration3/',

  resolve: {
    alias: {
      // Force Vite to use Node's crypto, not a browser polyfill
      crypto: 'node:crypto'
    }
  }
})
