const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.js');

process.env.NODE_ENV = 'production';

module.exports = merge(webpackBaseConfig, {
  devtool: 'source-map',
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: '/lib/',
    filename: '[name].js',
    chunkFilename: '[id].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ],
  stats: 'errors-only'
});
