import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** GitHub Pages: user site repo is `username.github.io` → base `/`; project repo → `/<repo>/` */
function getBase() {
  if (process.env.VITE_BASE_PATH) {
    const b = process.env.VITE_BASE_PATH;
    return b.endsWith("/") ? b : `${b}/`;
  }
  const full = process.env.GITHUB_REPOSITORY; // "owner/repo" in GitHub Actions
  if (!full) return "/";
  const repo = full.split("/")[1] ?? "";
  if (repo.endsWith(".github.io")) return "/";
  return `/${repo}/`;
}

// https://vite.dev/config/
export default defineConfig({
  base: getBase(),
  logLevel: "error",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
