/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES || false;

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: isGithubPages ? "/meu-primeiro-molde" : undefined,
  images: {
    loader: "custom",
    loaderFile: "./src/containers/imgLoaderContainer.js",
  },
  env: {
    IS_GITHUB_PAGE: isGithubPages,
    THEME_FOLDER: "meu-primeiro-molde",
  },
};

module.exports = nextConfig;
