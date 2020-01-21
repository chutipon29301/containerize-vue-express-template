const express = require('express');
const helmet = require('helmet');
const { json, urlencoded } = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const { join } = require('path');

const app = express();

// Set running port form environment
app.set('port', process.env.PORT || 3000);

// Middleware for secure server
app.use(helmet());

// Decode middleware body from client
app.use(json());
app.use(urlencoded({ extended: true }));

// Logger for express
app.use(morgan('dev'));

// Serve static file
app.use(express.static(join(__dirname, './public')));

// Router of server
app.use('/api', router);

module.exports = app;