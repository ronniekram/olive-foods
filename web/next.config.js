/** @type {import('next').NextConfig} */
const withTwin = require("./with-twin");

const nextConfig = {
  reactStrictMode: true,
  legacyBrowsers: false,
    outputFileTracingRoot: path.join(__dirname, `../../`),
    outputFileTracingExcludes: {
      "*": [
        // prettier-ignore
        `node_modules/@swc/core-linux-x64-gnu`,
        `node_modules/@swc/core-linux-x64-musl`,
        `node_modules/@esbuild/linux-x64`,
      ],
    },
};

module.exports = withTwin(nextConfig);
