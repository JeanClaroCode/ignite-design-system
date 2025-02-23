/// <reference types="vite/client"/>
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/ignite-design-system/',
  plugins: [react()],
})
