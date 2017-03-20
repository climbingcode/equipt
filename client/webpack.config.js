/* eslint comma-dangle: ["error",
 {"functions": "never", "arrays": "only-multiline", "objects":
 "only-multiline"} ] */

const webpack  = require('webpack');
const path     = require('path');
const devBuild = process.env.NODE_ENV !== 'production';

const config = {
  entry: [
    'es5-shim/es5-shim',
    'es5-shim/es5-sham',
    'babel-polyfill',
    './app/bundles/Equipt/startup/app',
  ],

  output: {
    filename: 'webpack-bundle.js',
    path: '../app/assets/webpack',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, './app/bundles/Equipt/components'),
      containers: path.resolve(__dirname, './app/bundles/Equipt/containers'),
      config: path.resolve(__dirname, './app/bundles/Equipt/config'),
      helpers: path.resolve(__dirname, './app/bundles/Equipt/helpers'),
      actions: path.resolve(__dirname, './app/bundles/Equipt/actions'),
      stores: path.resolve(__dirname, './app/bundles/Equipt/stores'),
      dispatcher: path.resolve(__dirname, './app/bundles/Equipt/config/Dispatcher'),
      MainController: path.resolve(__dirname, './app/bundles/Equipt/components/MainController'),
      Constants: path.resolve(__dirname, './app/bundles/Equipt/config/Constants')
    }
  },

  plugins: [
    new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }),
  ],

  module: {
    rules: [
      {
        test: require.resolve('react'),
        use: {
          loader: 'imports-loader',
          options: {
            shim: 'es5-shim/es5-shim',
            sham: 'es5-shim/es5-sham',
          }
        },
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = config;

if (devBuild) {
  console.log('Webpack dev build for Rails'); // eslint-disable-line no-console
  module.exports.devtool = 'eval-source-map';
} else {
  console.log('Webpack production build for Rails'); // eslint-disable-line no-console
}
