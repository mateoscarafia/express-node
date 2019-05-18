'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave_secreta_custom';

exports.createToken = function (user) {

    let time = moment().unix()

    var payload = {
        sub: user._id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        role: user.role,
        image: user.image,
        iat: time,
        exp: time + 10000
    };

    return jwt.encode(payload, secret);
}