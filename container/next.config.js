const { withModuleFederation } = require('@module-federation/nextjs-mf');
const packageJson = require('./package.json');

module.exports = {
  future: { webpack5: true },
  images: {
    domains: ['upload.wikimedia.org'],
  },
  webpack: (config, options) => {
    const mfConf = {
      name: 'container',
      library: {
        type: config.output.libraryTarget,
        name: 'container',
      },
      remotes: {
        about: 'about',
        home: 'home',
      },
      exposes: {},
      shared: {
        ...packageJson.dependencies,
        react: { singleton: true, eager: true, requiredVersion: packageJson.dependencies.react },
        'react-dom': { singleton: true, eager: true, requiredVersion: packageJson.dependencies['react-dom'] },
      },
    };
    config.cache = false;
    withModuleFederation(config, options, mfConf);

    return config;
  },

  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
};
