const express = require('express')
const api = express.Router()
const controller = require('../controller/reserve')
let md_auth = require('../middlewares/authenticated')

api.get('/', md_auth.ensureAuth, controller.list)

//Search engine v1.0
api.get('/find/:email', md_auth.ensureAuth, controller.findByEmail)

//Data CRUD
api.post('/', md_auth.ensureAuth, controller.create)
api.put('/:id', md_auth.ensureAuth, controller.update)
api.get('/:id', md_auth.ensureAuth, controller.list)
api.delete('/:id', md_auth.ensureAuth, controller.deletes)


module.exports = api