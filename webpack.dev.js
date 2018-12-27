/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
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
    port: 4001,
    proxy: {
      '/graphql': 'http://localhost:4000',
    },
  },
  plugins: [
    // Enables Hot Module Replacement, otherwise known as HMR
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [

      /**
       * Load normal css file
       */
      {
        test: /\.css$/,
        loader: [
          'style-loader',
          'css-loader',
        ],
      },

      /**
       * Load application less css file
       */
      {
        test: /\.less$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        loader: [
          // add CSS to the DOM by injecting a <style> tag
          'style-loader',
          // allow importing css files in js code
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

      /**
       * Customize ant design library
       */
      {
        test: /\.less$/,
        include: [
          path.resolve(__dirname, 'node_modules/antd'),
        ],
        loader: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              modifyVars: {
                'primary-color': '#1890ff',
              },
              javascriptEnabled: true,
            },
          },
        ],
      },

    ],
  },
});
