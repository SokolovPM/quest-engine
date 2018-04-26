const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const constants = require('./constants');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name]-[chunkhash].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        loader: 'url-loader',
        test: /\.(gif|jpg|png|svg)($|\?)/,
        options: {
          limit: 10000
        }
      },
      {
        loader: 'url-loader',
        test: /favicon\.ico$/,
        options: {
          limit: 1
        }
      },
      {
        loader: 'url-loader',
        test: /\.(ttf|eot|woff|woff2)(\?.*)?$/,
        options: {
          limit: 100000
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        API_HOST: JSON.stringify(constants.API_HOST),
        API_VERSION: JSON.stringify(constants.API_VERSION),
        IS_BROWSER: true
      }
    }),
    new ExtractTextPlugin({
      filename: '[name]-[hash].css',
      disable: false,
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: 'index.template.ejs',
      inject: 'body'
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        screw_ie8: true, // eslint-disable-line camelcase
        warnings: true // Because uglify reports irrelevant warnings.
      }
    }),
    new ProgressBarPlugin()
  ]
};
