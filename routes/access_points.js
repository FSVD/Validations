var express = require('express');
var app = express();

// Including routers:
var index = require('./index');
var errorHandling = require('./errorHandling');

// Configuring routers passing the app as parameter:
index.configure(app);
errorHandling.configure(app);

module.exports = app;