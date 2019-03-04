/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config();
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const S3Plugin = require('webpack-s3-plugin');
// const CdnizerWebpackPlugin = require('webpack-cdnizer');
const common = require('./webpack.common.js');

// set the base url in case we want to deploy
// the assets in cdn instead of our local web server
// const baseUrl = process.env.CDN_BASE_URL;

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: 'scripts.[chunkhash].js',
    // publicPath: `${baseUrl}/`,
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin(),
      new UglifyJsPlugin(),
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

    // replace local file references in HTML and other files with CDN locations
    // new CdnizerWebpackPlugin({
    //   defaultCDNBase: baseUrl,
    //   files: [
    //     '/styles.*.css',
    //     '/scripts.*.js',
    //     '/favicon.ico',
    //   ],
    // }),

    // upload assets to S3
    // new S3Plugin({
    //   // Exclude uploading of html
    //   exclude: /.*\.html$/,
    //   s3Options: {
    //     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    //     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    //     region: process.env.AWS_REGION,
    //   },
    //   s3UploadOptions: {
    //     Bucket: process.env.AWS_BUCKET,
    //   },
    // }),
  ],
});
