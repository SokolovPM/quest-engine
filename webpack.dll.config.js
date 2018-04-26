const webpack = require('webpack');
const constants = require('./constants');

module.exports = {
  entry: {
    vendor: [
      'react',
      'lodash',
      'react-bootstrap',
      'react-dom',
      'react-redux',
      'redux',
      'react-router',
      'redux-saga',
      'styled-components',
      'tokeys'
    ]
  },
  output: {
    filename: '[name].lib.js',
    path: constants.BUILD_DIR,
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: `${constants.BUILD_DIR}/[name]-manifest.json`
    })
  ]
};
