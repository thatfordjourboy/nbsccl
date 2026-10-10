import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import { SITE_URL } from './scripts/site-url.mjs';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    'import.meta.env.VITE_SITE_URL': JSON.stringify(SITE_URL),
  },
  build: {
    target: 'es2020',
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
  },
});
