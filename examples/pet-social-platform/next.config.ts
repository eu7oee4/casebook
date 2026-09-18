import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  agentRules: false,
  devIndicators: false,
  /**
   * The case is a fully pre-rendered site: no API routes, no runtime `fetch`,
   * no `next/headers`. Exporting it to plain files keeps it portable — the same
   * `out/` folder runs on Cloudflare Pages, GitHub Pages or a mainland OSS bucket,
   * so the host can change later without touching the site.
   */
  output: "export",
  /** `/en/market/index.html`, so hosts that only serve directory index files work. */
  trailingSlash: true,
};

export default nextConfig;
