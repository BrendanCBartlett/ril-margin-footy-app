import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  outputFileTracingRoot: path.join(__dirname, "./"),
  transpilePackages: ["@dashboardpack/core"],
  turbopack: {},

  webpack(config) {
    // Ensure node_modules resolution
    config.resolve.modules = [
      path.resolve(__dirname, "node_modules"),
      "node_modules",
    ];

    // ✅ Fix DashboardPack core resolution
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@dashboardpack/core": path.resolve(
        __dirname,
        "node_modules/@dashboardpack/core"
      ),
    };

    config.resolve.symlinks = false;
    return config;
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(nextConfig);
