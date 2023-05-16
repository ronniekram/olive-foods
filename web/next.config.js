/** @type {import('next').NextConfig} */
const withTwin = require("./with-twin");

const nextConfig = {
  reactStrictMode: true,
}

module.exports = withTwin(nextConfig);
