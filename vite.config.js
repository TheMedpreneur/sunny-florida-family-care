import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Safari 14+ / Chrome 87+ — smaller output than the default esnext downlevel
    target: 'es2020',
    // The hero image is ~200KB; anything under 4KB is worth inlining instead
    assetsInlineLimit: 4096,
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined;
          // React and the router change rarely — give them a stable long-cache
          // chunk so a copy edit does not invalidate the whole vendor bundle.
          if (id.includes('react-router')) return 'router';
          if (id.includes('react-dom') || id.includes('/react/') || id.includes('scheduler')) return 'react';
          return 'vendor';
        },
      },
    },
  },
});
