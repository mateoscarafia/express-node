'use strict'

const HttpStatus = require('../constants/HttpStatus')
let User = require('../models/user');
let bcrypt = require('bcrypt-nodejs');
let jwt = require('../services/jwt');



function register(req, res, next) {

    var params = req.body;
    var user = new User();

    if (!params.EMAIL || !params.PASSWORD) {
        return res.status(200).send({ message: 'Data missing' })
    }

    user.EMAIL = params.EMAIL;
   
    User.find({
        $or: [

            { EMAIL: user.EMAIL.toLowerCase() }

        ]
    }).exec((err, users) => {
        
        if(err) next(err)

        if (users && users.length >= 1) {
            return res.status(200).send({ message: 'User already exist' })
        } else {

            bcrypt.hash(params.PASSWORD, null, null, (err, hash) => {
                user.PASSWORD = hash;

                user.save((err, userStored) => {
                    if (err) return res.error(err)

                    return (userStored) ? res.status(200).send({ user: userStored })
                        : res.error(err)

                })
            });

        }
    })

}

function login(req, res, next) {
    var params = req.body;

    if (!params.EMAIL || !params.PASSWORD) {
        return res.status(200).send({ message: 'Data missing' })
    }

    var email = params.EMAIL;
    var password = params.PASSWORD;

    User.findOne({ EMAIL: email }, (err, user) => {

        res.error(err)

        if (user) {

            bcrypt.compare(password, user.PASSWORD, (err, check) => {
                return check ? params.gettoken
                    ? res.status(200).send({ token: jwt.createToken(user) })
                    : res.status(200).send({ user })
                    : res.error(err)
            });

        } else {
            return res.status(404).send({ message: 'El usuario no existe' });
        }
    })
}

module.exports = {
    register,
    login
}
