const express = require('express');
const app = express();

// Including modules:
const index = require('./src/index');
const errors = require('./src/errors');

app.use(errors);
app.use(index);

module.exports = app;
