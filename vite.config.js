import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // GitHub Pages serves project sites from /<repository>/.
  base: process.env.GITHUB_ACTIONS ? '/portfolio/' : '/',
  plugins: [react()],
});
