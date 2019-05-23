
var express = require('express');
var bodyParser = require('body-parser');
const HttpStatus = require('./constants/HttpStatus')

var app = express();

//limiter
const rateLimit = require("express-rate-limit");
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use(limiter);

//logger
var logger = require('logger-request');
var app = require('express')();
app.use(logger({
  filename: 'api-log.log',
}));

//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//security layer
const helmet = require('helmet')
app.use(helmet())

//cors
var cors = require('cors')
var corsOptions = { origin: 'http://34.554.55.78', optionsSuccessStatus: 200 }

//Standarized Response Events
app.use((req, res, next) => {

  res.success = (data) => {
    return res.status(HttpStatus.OK).json(data)
  }

  res.created = (data) => {
    return res.status(HttpStatus.CREATED).json(data)
  }

  res.notFound = () => {
    return res.sendStatus(HttpStatus.NOT_FOUND)
  }

  res.error = (err) => {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err)
  }

  res.forbidden = (err) => {
    return res.status(HttpStatus.FORBIDDEN).json(err)
  }

  res.accessDenied = () => {
    return res.sendStatus(HttpStatus.UNAUTHORIZED)
  }

  res.unsupportedMediaType = () => {
    return res.sendStatus(HttpStatus.UNSUPPORTED_MEDIA_TYPE)
  }

  res.badRequest = () => {
    return res.sendStatus(HttpStatus.BAD_REQUEST)
  }

  next()

})

//routes directory
var reserve_routes = require('./routes/reserve');
var user_routes = require('./routes/user');

//ruotes
app.use('/reserve', reserve_routes);
app.use('/user', user_routes);

//exports
module.exports = app;

