/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      // Extract css from the bundle into a separate file.
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
              },
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    // Extract css from the bundle into a separate file.
    new ExtractTextPlugin('styles.css'),
  ],
});
