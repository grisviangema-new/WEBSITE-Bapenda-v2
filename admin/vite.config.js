import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <--- Tambahkan ini

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <--- Panggil fungsinya di sini
  ],
  envDir: '../', // Arahkan ke direktori root untuk mengakses .env
})