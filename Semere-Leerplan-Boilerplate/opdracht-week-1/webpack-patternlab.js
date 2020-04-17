const path = require('path');
const rules = require('require.all')('./tasks/rules');
const plugins = require('require.all')('./tasks/plugins');

module.exports = env => {
  let environment = env.NODE_ENV;
  env.NODE_ENV = JSON.stringify(environment);

  rules((name, rule) => rule(environment));
  plugins((name, rule) => rule(environment));

  return ({
    mode: environment,
    entry: {
      'css/style': path.resolve(__dirname, 'app/styles/app.scss'),
      'js/app': path.resolve(__dirname, 'app/scripts/app.js'),
    },
    output: {
      path: path.resolve(__dirname, '../opdracht-2/source'),
      filename: '[name].js'
    },
    module: {
      rules: [
        ...rules.files,
        rules.scripts,
        rules.styles,
      ]
    },
    plugins: [
      plugins.extractStyles,
    ],
    devServer: {
      open: true,
      port: 4000,
      https: false,
      hot: true,
      historyApiFallback: true,
      watchOptions: {
          poll: true
      }
      // proxy: { '/api': 'http://localhost:3000' }
    },
    optimization: {
      minimizer: [plugins.uglify],
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'all',
            test: path.resolve(__dirname, 'node_modules'),
            name: 'vendor',
            enforce: true,
          },
        },
      },
    },
    resolve: {
      alias: {
        'styles': path.resolve(__dirname, 'app/styles'),
        'assets': path.resolve(__dirname, 'app/assets'),
        '~': path.resolve(__dirname, 'app/scripts')
      }
    }
  })
};
