require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.API_URL || 3000;

const routes = require('./routes/routes');
app.use('/', routes);

module.exports = app;
