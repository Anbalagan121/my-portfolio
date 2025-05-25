import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'vite-project',
  base: '/my-portfolio/',
  plugins: [react()],
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
});
