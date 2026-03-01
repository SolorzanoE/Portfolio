import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "node:path"

const dirname = import.meta.dirname

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(dirname, "./src"),
      '@root': path.resolve(dirname)
    }
  }
})