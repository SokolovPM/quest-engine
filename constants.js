const path = require('path');

const ABSOLUTE_BASE = path.normalize(__dirname);

const constants = Object.freeze({
  BUILD_DIR: path.join(ABSOLUTE_BASE, 'dist'),
  HOT_RELOAD_PORT: 3000,
  API_HOST: process.env.API_HOST,
  API_VERSION: process.env.API_VERSION
});

module.exports = constants;
