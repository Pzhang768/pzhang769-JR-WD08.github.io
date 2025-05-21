import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/pzhang769-JR-WD08.github.io/', // 👈 Must match your repo name exactly
});