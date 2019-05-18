'use strict'

let User = require('../models/user');
let bcrypt = require('bcrypt-nodejs');
let jwt = require('../services/jwt');

function testtoken(req, res) {
    return res.status(200).send({ message: 'token is OK' })
}

function register(req, res) {

    var params = req.body;
    var user = new User();

    if (!params.email || !params.password) {
        return res.status(200).send({ message: 'Envia todos los campos necesarios' })
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
        if (err) return res.status(500).send({ message: 'Error en busqueda de usuarios' });

        if (users && users.length >= 1) {
            return res.status(200).send({ message: 'El usuario ya existe' })
        } else {

            bcrypt.hash(params.password, null, null, (err, hash) => {
                user.password = hash;

                user.save((err, userStored) => {
                    if (err) return res.status(500).send({ message: 'Error al guardar mensaje' });

                    return (userStored) ? res.status(200).send({ user: userStored })
                        : res.status(404).send({ message: 'No se registro el usuario' })

                })
            });

        }
    })

}

function login(req, res) {
    var params = req.body;

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