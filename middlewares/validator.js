'use strict'
var validator = require('validator');


exports.validator = async function (req, res, next) {

    for (const prop in req.body) {

        if (prop === 'EMAIL' && !validator.isEmail(req.body[prop])) {
            return res.status(404).send({ message: 'Mail invalid' })
        } else if (prop === 'PASSWORD' && !validator.isLength(req.body[prop], { min: 6, max: 15 })) {
            return res.status(404).send({ message: 'Password invalid' })
        }

    }

    next()

}
