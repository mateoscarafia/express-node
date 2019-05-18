'use strict'

const fs = require('fs')

exports.logReqs = function (req, res, next) {
    var log = '\r' + req.headers.authorization + ' -- ' + JSON.stringify(req.body)
    fs.appendFile("log-req.txt", log, function (err) { });
    next();
}

