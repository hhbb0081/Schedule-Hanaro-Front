// vite.config.ts
import { defineConfig } from "file:///C:/Users/campus2H053/Desktop/Schedule_Hanaro_FE/Schedule-Hanaro-Front/node_modules/.pnpm/vite@5.4.9_@types+node@22.7.7_terser@5.36.0/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/campus2H053/Desktop/Schedule_Hanaro_FE/Schedule-Hanaro-Front/node_modules/.pnpm/@vitejs+plugin-react-swc@3.7.1_vite@5.4.9_@types+node@22.7.7_terser@5.36.0_/node_modules/@vitejs/plugin-react-swc/index.mjs";
import svgr from "file:///C:/Users/campus2H053/Desktop/Schedule_Hanaro_FE/Schedule-Hanaro-Front/node_modules/.pnpm/@svgr+rollup@8.1.0_rollup@2.79.2_typescript@5.6.3/node_modules/@svgr/rollup/dist/index.js";
import path from "path";
import { VitePWA } from "file:///C:/Users/campus2H053/Desktop/Schedule_Hanaro_FE/Schedule-Hanaro-Front/node_modules/.pnpm/vite-plugin-pwa@0.17.5_vite@5.4.9_@types+node@22.7.7_terser@5.36.0__workbox-build@7.1.1_@type_iict26epytne4rvu4l5z7yzohe/node_modules/vite-plugin-pwa/dist/index.js";
var __vite_injected_original_dirname = "C:\\Users\\campus2H053\\Desktop\\Schedule_Hanaro_FE\\Schedule-Hanaro-Front";
var vite_config_default = defineConfig({
  plugins: [react(), svgr(), VitePWA({ registerType: "autoUpdate" })],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__vite_injected_original_dirname, "src") }],
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".css.ts"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxjYW1wdXMySDA1M1xcXFxEZXNrdG9wXFxcXFNjaGVkdWxlX0hhbmFyb19GRVxcXFxTY2hlZHVsZS1IYW5hcm8tRnJvbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGNhbXB1czJIMDUzXFxcXERlc2t0b3BcXFxcU2NoZWR1bGVfSGFuYXJvX0ZFXFxcXFNjaGVkdWxlLUhhbmFyby1Gcm9udFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvY2FtcHVzMkgwNTMvRGVza3RvcC9TY2hlZHVsZV9IYW5hcm9fRkUvU2NoZWR1bGUtSGFuYXJvLUZyb250L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2MnO1xyXG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGUtcGx1Z2luLXN2Z3IvY2xpZW50XCIgLz5cclxuaW1wb3J0IHN2Z3IgZnJvbSAnQHN2Z3Ivcm9sbHVwJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW3JlYWN0KCksIHN2Z3IoKSwgVml0ZVBXQSh7IHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnIH0pXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczogW3sgZmluZDogJ0AnLCByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpIH1dLFxyXG4gICAgZXh0ZW5zaW9uczogWycuanMnLCAnLnRzJywgJy5qc3gnLCAnLnRzeCcsICcuY3NzJywgJy5jc3MudHMnXSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE2WSxTQUFTLG9CQUFvQjtBQUMxYSxPQUFPLFdBQVc7QUFFbEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sVUFBVTtBQUNqQixTQUFTLGVBQWU7QUFMeEIsSUFBTSxtQ0FBbUM7QUFTekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsUUFBUSxFQUFFLGNBQWMsYUFBYSxDQUFDLENBQUM7QUFBQSxFQUNsRSxTQUFTO0FBQUEsSUFDUCxPQUFPLENBQUMsRUFBRSxNQUFNLEtBQUssYUFBYSxLQUFLLFFBQVEsa0NBQVcsS0FBSyxFQUFFLENBQUM7QUFBQSxJQUNsRSxZQUFZLENBQUMsT0FBTyxPQUFPLFFBQVEsUUFBUSxRQUFRLFNBQVM7QUFBQSxFQUM5RDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
