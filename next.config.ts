const isProd = process.env.NODE_ENV === "production";
import type { NextConfig } from "next";

const repoName = "joshkwka.github.io";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
