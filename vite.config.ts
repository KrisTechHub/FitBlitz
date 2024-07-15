import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }] //use @/components/filename.ext in importing of components or anything from the src folder 
  },
  server: {
    host: true,
    strictPort: true,
    port: 8000,
  },
})
