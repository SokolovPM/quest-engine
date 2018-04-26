const path = require('path');
const express = require('express');
const compression = require('compression');

const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, '/build')));

const port = 3000; // you can use any port
app.listen(port);
console.log(`server on: ${port}`);
