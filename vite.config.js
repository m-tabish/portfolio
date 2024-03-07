import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    host: '192.168.29.217', // Change to your desired host
    port: 3000, // Change to your desired port
  },
})
