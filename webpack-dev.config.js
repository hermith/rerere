const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack/hot/only-dev-server',
    path.join(__dirname, '/src/app/app.tsx'),
  ],
  devServer: {
    contentBase: 'src/www',
    devtool: 'eval',
    hot: true,
    inline: true,
    port: 3000,
    host: 'localhost',
  },
  devtool: 'source-map',
  output: {
    path: buildPath, // Path of output file
    filename: 'app.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new TransferWebpackPlugin([
      { from: 'www' },
    ], path.resolve(__dirname, 'src')),
  ],
  resolve: {
    extensions: ['', '.styl', '.ts', '.tsx', '.js'],
  },
  module: {
    loaders: [
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader',
      },
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: [nodeModulesPath],
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: [nodeModulesPath],
      },
    ],
  },
};

module.exports = config;
