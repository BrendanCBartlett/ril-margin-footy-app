import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  outputFileTracingRoot: path.join(__dirname, "./"),
  transpilePackages: ["@dashboardpack/core"],
  turbopack: {},
  webpack(config) {
    // Ensure symlinked packages resolve dependencies from the consumer's node_modules
    config.resolve.modules = [
      path.resolve(__dirname, "node_modules"),
      "node_modules",
    ];
    config.resolve.symlinks = false;
    return config;
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(nextConfig);
