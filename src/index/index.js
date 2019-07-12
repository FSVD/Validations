var express = require('express');
var app = express();

// router setup
var indexRouter = require('./index.router');
indexRouter.configure(app);

module.exports = app;