var express = require('express');

var app = module.exports.app = exports.app = express();
app.use('/', express.static('dist'));
app.listen(80);
