/// <reference types="vite/client"/>
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/ignite-design-system/' : '/', // Condicional para produção
  build: {
    outDir: 'storybook-static', // Importante: deve corresponder ao publish_dir do GitHub Pages
    assetsDir: 'assets', // Opcional: para organizar os assets
  },
}))
