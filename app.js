'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//limiter
const rateLimit = require("express-rate-limit");
const limiter = rateLimit({windowMs: 15 * 60 * 1000, max: 100 });
app.use(limiter);

//logger
var logger = require('logger-request');
var app = require('express')();
app.use(logger({
  filename: 'api-log.log',
}));

//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//security layer
const helmet = require('helmet')
app.use(helmet())

//cors
var cors = require('cors')
var corsOptions = {origin: 'http://34.554.55.78',optionsSuccessStatus: 200 }

//controller routes
var user_routes = require('./routes/user');

//ruotes
app.use('/',user_routes);

//exports
module.exports = app;

