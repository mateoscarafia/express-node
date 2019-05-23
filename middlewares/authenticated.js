
var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'FG78DFGDFGY9H98RGHEOGH';

exports.ensureAuth = function (req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).send({ message: 'Send token' });
    }
    var token = req.headers.authorization.replace(/['"]+/g, '');

    try {
        var payload = jwt.decode(token, secret);

        if (payload.ext <= moment().unix()) {
            return res.status(401).send({
                message: 'Token expire'
            });
        }


    } catch (ex) {
        return res.status(404).send({
            message: 'Token invalid'
        });
    }

    req.user = payload;

    next();

}

