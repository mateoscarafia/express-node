
let express = require('express')
let UserController = require('../controller/user')
let validator = require('../middlewares/validator')

let api = express.Router()

api.post('/register', validator.validator, UserController.register)
api.post('/login', validator.validator, UserController.login)


module.exports = api