import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        // Popup entry point (loads popup.html)
        popup: resolve(__dirname, "public/popup.html"),
        // Content script entry point
        content: resolve(__dirname, "src/content.jsx")
      },
      output: {
        // Output predictable file names for easier referencing in the manifest
        entryFileNames: "[name].js"
      }
    }
  }
});
