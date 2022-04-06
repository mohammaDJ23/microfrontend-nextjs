const { withFederatedSidecar } = require('@module-federation/nextjs-mf');
const packageJson = require('./package.json');

/** @type {import('next').NextConfig} */
module.exports = withFederatedSidecar({
  name: 'about',
  filename: 'static/chunks/remoteEntry.js',
  remotes: {},
  exposes: {
    './about': './modules/about.js',
  },
  shared: packageJson.dependencies,
})({
  reactStrictMode: true,
});
