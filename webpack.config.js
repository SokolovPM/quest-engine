const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const constants = require('./constants');

module.exports = {
  entry: [
    `webpack-hot-middleware/client?path=http://localhost:${
      constants.HOT_RELOAD_PORT
    }/__webpack_hmr`,
    './src/index.js'
  ],

  output: {
    filename: 'app.js',
    // the output bundle

    path: constants.BUILD_DIR,

    publicPath: '/'
    // necessary for HMR to know where to load the hot update chunks
  },

  devtool: 'inline-source-map',

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
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(), // important: preventing HMR is being stopped after error occurs,
    // enable HMR globally

    new webpack.NamedModulesPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
        API_HOST: JSON.stringify(constants.API_HOST),
        API_VERSION: JSON.stringify(constants.API_VERSION),
        IS_BROWSER: true
      }
    }),

    new HtmlWebpackPlugin({
      template: 'index.template.ejs',
      vendor: '<script type="text/javascript" src="/vendor.lib.js"></script>',
      inject: 'body'
    }),

    new webpack.DllReferencePlugin({
      context: '.',
      // eslint-disable-next-line
      manifest: require(`${constants.BUILD_DIR}/vendor-manifest.json`) // eslint-disable-line import/no-dynamic-require
    })
    // prints more readable module names in the browser console on HMR updates
  ]
};
