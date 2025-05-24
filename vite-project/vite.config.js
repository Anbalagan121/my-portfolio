import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/anbu_portfolio/', // ✅ Change this if your repo name is different
  plugins: [react()]
});
