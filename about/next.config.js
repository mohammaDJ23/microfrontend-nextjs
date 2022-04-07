const { withModuleFederation } = require('@module-federation/nextjs-mf');
const packageJson = require('./package.json');

module.exports = {
  future: { webpack5: true },
  images: {
    domains: ['upload.wikimedia.org'],
  },
  webpack: (config, options) => {
    const { isServer } = options;
    const mfConf = {
      mergeRuntime: true, //experimental
      name: 'about',
      library: {
        type: config.output.libraryTarget,
        name: 'about',
      },
      filename: 'static/runtime/remoteEntry.js',
      remotes: {},
      exposes: {
        './aboutPage': './modules/about.js',
      },
      shared: {
        ...packageJson.dependencies,
        react: { singleton: true, eager: true, requiredVersion: packageJson.dependencies.react },
        'react-dom': { singleton: true, eager: true, requiredVersion: packageJson.dependencies['react-dom'] },
      },
    };
    config.cache = false;
    withModuleFederation(config, options, mfConf);
    if (!isServer) {
      config.output.publicPath = 'http://localhost:3001/_next/';
    }

    return config;
  },

  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
};
