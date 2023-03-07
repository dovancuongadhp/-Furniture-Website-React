import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import path from 'node:path';
// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@components': path.resolve(__dirname,'./src/components'),
      '@styles': path.resolve(__dirname,'./src/assets/style'),
      '@icons': path.resolve(__dirname,'./src/assets/icons'),
      '@imgs': path.resolve(__dirname,'./src/assets/img'),
    },
  },
  plugins: [react()],
})
