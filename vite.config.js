import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './3d_portfolio/',
  plugins: [react()],
  assetsInclude: ['**/*.glb']
})
