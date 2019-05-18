'use strict'

let express = require('express')
let UserController = require('../controller/user')

let api = express.Router()
let md_auth = require('../middlewares/authenticated')
let log_req = require('../middlewares/log-req')

api.post('/register', UserController.register)
api.post('/login', UserController.login)
api.get('/testtoken', md_auth.ensureAuth, log_req.logReqs, UserController.testtoken)

module.exports = api