import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import { withZephyr } from 'vite-plugin-zephyr';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        catalog_app: 'http://localhost:5173/assets/remoteEntry.js', 
        detail_app: 'http://localhost:5174/assets/remoteEntry.js',  
      },
      shared: ['react', 'react-dom']
    }),
    withZephyr()
  ]
})