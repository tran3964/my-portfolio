import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // dev = "/", prod = "/my-portfolio/"
  base: mode === "production" ? "/my-portfolio/" : "/",
}));
