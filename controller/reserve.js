
const Schema = require('../models/reserve')
const mongoose = require('mongoose')
const HttpStatus = require('../constants/HttpStatus')


async function create(req, res) {
    Schema.create(req.body, (err, data) => {
        if (err) return res.error(err)

        return res.created(data)
    })
}


async function findByEmail(req, res) {
    Schema.find({ EMAIL: req.params.email }, (err, data) => {
        if (err) return res.error(err)
        if (!data) return res.notFound(HttpStatus.NOT_FOUND)

        return res.success(data)
    })
}

async function list(req, res) {
    var params = req.params
    if (Object.keys(params).length === 0) {
        Schema.find({}, (err, data) => {
            if (err) return res.error(err)
            if (!data) return res.notFound(HttpStatus.NOT_FOUND)

            return res.success(data)
        })
    } else {
        if (!mongoose.Types.ObjectId.isValid(params.id))
            return res.badRequest({ msg: 'Invalid parameter' })

        Schema.findOne({ _id: params.id }, (err, data) => {
            if (err) return res.error(err)
            if (!data) return res.notFound(HttpStatus.NOT_FOUND)

            return res.success(data)
        })
    }
}

async function update(req, res) {
    if (!req.params.id) return res.badRequest({ msg: "Data missing" })
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.badRequest({ msg: 'Invalid parameters' })
    Schema.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true
    }, (err, user) => {
        if (err) return res.error(err)
        return res.success(user)
    })
}


async function deletes(req, res) {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.badRequest({ msg: 'Invalid parameters' })

    Schema.deleteOne({ _id: req.params.id }, (err, data) => {
        if (err) return res.error(err)
        if (data.n === 0) return res.notFound(HttpStatus.NOT_FOUND)

        return res.success({ msg: 'Record deleted' })
    })
}


module.exports = {
    create,
    findByEmail,
    list,
    update,
    deletes
}