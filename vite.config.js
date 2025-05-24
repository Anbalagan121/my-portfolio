import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  root: 'vite-project', // This tells Vite where to find index.html
  base: '/anbu_portfolio/', // This is required for GitHub Pages
  plugins: [react(), tailwindcss()],
  build: {
    outDir: '../dist', // Output to root-level /dist so gh-pages can deploy it
    emptyOutDir: true
  }
});
