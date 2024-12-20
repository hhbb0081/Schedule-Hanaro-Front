import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
/// <reference types="vite-plugin-svgr/client" />
import svgr from '@svgr/rollup';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), svgr(), VitePWA({ registerType: 'autoUpdate' })],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.css.ts'],
  },
});
