/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const common = require('./webpack.common.js');

// const cdnBaseUrl = process.env.CDN_BASE_URL;

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: 'scripts.[chunkhash].js',
    // publicPath: `${cdnBaseUrl}/`,
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin(),
    ],
  },
  plugins: [
    // Extract css from the bundle into a separate file.
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'styles.[name].[hash].css',
      chunkFilename: 'styles.[id].[hash].css',
    }),
  ],
  module: {
    rules: [
      // load less file
      {
        test: /\.less$/,
        loader: [
          // extract CSS into separate files
          MiniCssExtractPlugin.loader,
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
