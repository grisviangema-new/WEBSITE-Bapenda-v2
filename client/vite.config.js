import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Import ini

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Panggil ini
  ],
  envDir: '../', // Arahkan ke direktori root untuk mengakses .env
})