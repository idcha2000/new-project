import type { NextConfig } from "next";

// Project pages are served under /new-project/ on GitHub Pages.
// Do not force that prefix in Codespaces or local development.
const isGitHubPagesBuild = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPagesBuild ? "/new-project" : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
