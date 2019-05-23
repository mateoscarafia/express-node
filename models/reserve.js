const mongoose = require('mongoose')
const schema = mongoose.Schema

const _schema = new schema({
    EMAIL: {
        title: 'Email usuario',
        type: String,
        required: true
    },
    NAME: {
        title: 'Nombre usuario',
        type: String,
        required: true
    },
    SURNAME: {
        title: 'Apellido usuario',
        type: String,
        required: true
    },
    PHONE: {
        title: 'Teléfono usuario',
        type: String,
        required: true
    },
    CAR_ID: {
        title: '_id auto reservado',
        type: String,
        required: true
    }
}, {
    timestamps: true,
    collection: 'Reserve'
})

module.exports = mongoose.model('Reserve', _schema)