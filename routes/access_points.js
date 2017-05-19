var express = require('express');
var app = express();

// Including routers:
var index = require('./index');
var generic = require('./generic');

// Configuring routers passing the app as parameter:
index.configure(app);
generic.configure(app);

module.exports = app;