/** @type {import('next').NextConfig} */
const path = require("node:path");
const withTwin = require("./with-twin");

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withTwin(nextConfig);
