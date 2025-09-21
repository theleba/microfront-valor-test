import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import { withZephyr } from 'vite-plugin-zephyr';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'catalog_app',
      filename: 'remoteEntry.js',
      exposes: {
        './CatalogPage': './src/CatalogPage.tsx',
      },
      shared: ['react', 'react-dom']
    }),
    withZephyr()
  ],
    server: {
    port: 5173, 
    cors: true 
  },
  build: {
    target: 'esnext'
  }
})