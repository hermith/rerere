const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {
  entry: [path.join(__dirname, '/src/app/app.tsx')],
  devtool: 'source-map',
  // output config
  output: {
    path: buildPath, // Path of output file
    filename: 'app.js', // Name of output file
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
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
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: [nodeModulesPath],
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader',
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
