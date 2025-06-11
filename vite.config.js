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
      }
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    }
  },
  define: {
    'import.meta.env.VITE_EMAILJS_SERVICE_ID': JSON.stringify('service_8vmnfsl'),
    'import.meta.env.VITE_EMAILJS_TEMPLATE_ID': JSON.stringify('template_nthjbpl'),
    'import.meta.env.VITE_EMAILJS_PUBLIC_KEY': JSON.stringify('PBRoImwpZQqiQ48Ky')
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@emailjs/browser',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-brands-svg-icons',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/react-fontawesome',
    ]
  },
  server: {
    fs: {
      strict: false
    }
  }
});