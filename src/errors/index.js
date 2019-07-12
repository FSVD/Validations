var express = require('express');
var app = express();

// router setup
var errorsRouter = require('./errors.router');
errorsRouter.configure(app);

module.exports = app;