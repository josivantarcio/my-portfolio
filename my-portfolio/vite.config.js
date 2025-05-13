import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [react()],
  base: isProd ? '/my-portfolio/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  server: {
    port: 5173,
    strictPort: true,
    host: true
  }
}) 