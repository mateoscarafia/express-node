'use strict'

let User = require('../models/user');
let bcrypt = require('bcrypt-nodejs');
let jwt = require('../services/jwt');

function testtoken(req, res) {
    return res.status(200).send({ message: 'Token is OK' })
}

function register(req, res) {

    var params = req.body;
    var user = new User();

    if (!params.email || !params.password) {
        return res.status(200).send({ message: 'Data missing' })
    }

    user.name = params.name;
    user.surname = params.surname;
    user.nick = params.nick;
    user.email = params.email;
    user.role = 'ROLE_USER';
    user.image = null;

    User.find({
        $or: [

            { email: user.email.toLowerCase() }

        ]
    }).exec((err, users) => {
        if (err) return res.status(500).send({ message: 'Error' });

        if (users && users.length >= 1) {
            return res.status(200).send({ message: 'User already exist' })
        } else {

            bcrypt.hash(params.password, null, null, (err, hash) => {
                user.password = hash;

                user.save((err, userStored) => {
                    if (err) return res.status(500).send({ message: 'Error' });

                    return (userStored) ? res.status(200).send({ user: userStored })
                        : res.status(404).send({ message: 'Error' })

                })
            });

        }
    })

}

function login(req, res) {
    var params = req.body;
    
    if (!params.email || !params.password) {
        return res.status(200).send({ message: 'Data missing' })
    }

    var email = params.email;
    var password = params.password;

    User.findOne({ email: email }, (err, user) => {

        if (err) return res.status(500).send({ message: 'Error' });

        if (user) {

            bcrypt.compare(password, user.password, (err, check) => {
                return check ? params.gettoken
                    ? res.status(200).send({ token: jwt.createToken(user) })
                    : res.status(200).send({ user })
                    : res.status(404).send({ message: 'Logueo fallido' })
            });

        } else {
            return res.status(404).send({ message: 'El usuario no existe' });
        }
    })
}

module.exports = {
    register,
    login,
    testtoken
}
