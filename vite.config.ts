import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "public",
  define: {
    __APP_ENV__: process.env.VITE_VERCEL_ENV,
  },
  build: {
    outDir: "dist",
  },
});
