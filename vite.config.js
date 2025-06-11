import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      external: [
        'react',
        'react-dom',
        'react-router-dom',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/react-fontawesome',
        // Add any other peer dependencies here
      ],
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      // Add other aliases if needed
    },
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-brands-svg-icons',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/react-fontawesome',
      // Add other heavy dependencies that should be pre-bundled
    ],
    exclude: [
      // Exclude dependencies that should not be pre-bundled
    ],
  },
  // Add if using SSR
  ssr: {
    external: [
      'react',
      'react-dom',
      // Add other SSR externals
    ],
    noExternal: [
      // Packages that should be bundled for SSR
    ],
  },
});