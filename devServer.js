const webpack = require('webpack');
const webpackDev = require('webpack-dev-middleware');
const webpackHot = require('webpack-hot-middleware');
const modRewrite = require('connect-modrewrite');
const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const fsExtra = require('fs-extra');
const path = require('path');
const webpackConfig = require('./webpack.config');
const constants = require('./constants');


const dataSource = require('./dataSource');

const app = express();
app.use(express.static('dist'));

app.use(bodyParser.json({ limit: 1024102420, type: 'application/json' }));
app.use(
  bodyParser.urlencoded({
    type: 'application/json',
    extended: true
  })
);

const compiler = webpack(webpackConfig);

app.get('/listOfQuests', (req, res) => {
  res.send(dataSource.getListOfQuest());
});

app.get('/quests/:questName/*.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, req.path));
});
app.get('/quests/:questName/:chapterName/*preview.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, req.path));
});

app.get('/quests/:questName/:chapterName', (req, res) => {
  res.sendFile(path.join(__dirname, req.path, 'data.json'));
});

app.use(
  modRewrite([
    '!\\.html|\\.js|\\.svg|\\.woff|\\.ttf|\\.css|\\.png|\\.jpeg|\\.jpg|\\.swf|\\.gif$ /index.html [L]'
  ])
);

app.use(
  webpackDev(compiler, {
    headers: { 'Access-Control-Allow-Origin': '*' },
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    historyApiFallback: true
  })
);

app.use(webpackHot(compiler));

const port = constants.HOT_RELOAD_PORT;
const server = app.listen(port, () => {
  console.log('Hot server started at port %d', port); // eslint-disable-line no-console
});
server.timeout = 0;
