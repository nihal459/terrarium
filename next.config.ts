import type { NextConfig } from "next";

// STATIC_EXPORT=true builds plain HTML into dist/client for static hosts such as
// GitHub Pages. The subpath (NEXT_PUBLIC_BASE_PATH) is applied through Vite's
// `base` and lib/base-path.ts rather than `basePath`, because vinext's
// prerenderer requests routes without the basePath prefix and gets 404s.
const nextConfig: NextConfig =
  process.env.STATIC_EXPORT === "true" ? { output: "export" } : {};

export default nextConfig;
