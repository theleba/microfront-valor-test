import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import { withZephyr } from 'vite-plugin-zephyr'; // Add this line

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'detail_app',
      filename: 'remoteEntry.js',
      exposes: {
        './DetailPage': './src/DetailPage.tsx',
      },
      shared: ['react', 'react-dom']
    }),
    withZephyr()
  ],
  server: {
    port: 5174, 
    cors: true 
  },
  build: {
    target: 'esnext'
  }
})