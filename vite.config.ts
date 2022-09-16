
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import * as path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    cors: false,
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    svgr(),
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});
