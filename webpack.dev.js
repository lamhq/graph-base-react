/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    open: true,
    contentBase: './dist',
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3000',
    },
    port: 3001,
  },
  plugins: [
    // Enables Hot Module Replacement, otherwise known as HMR
    new webpack.HotModuleReplacementPlugin(),
    // This plugin will cause the relative path of the module
    // to be displayedwhen HMR is enabled
    new webpack.NamedModulesPlugin(),
  ],
  module: {
    rules: [
      // load less file
      {
        test: /\.less$/,
        loader: [
          // add CSS to the DOM by injecting a <style> tag
          'style-loader',
          // allow importing css files
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]_[hash:base64:5]',
            },
          },
          // compile less to css
          'less-loader',
        ],
      },
    ],
  },
});
