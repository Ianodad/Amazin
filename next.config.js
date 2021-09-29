/* eslint-disable unicorn/prefer-module */
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
  },
  images: {
    domains: ['drive.google.com', 'res.cloudinary.com', 'unsplash.com'],
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };

    return config;
  },
});
