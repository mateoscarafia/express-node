var mongoose = require('mongoose');
var schema = mongoose.Schema;

var _schema  = schema({
    EMAIL: {
        title: 'Email',
        type: String,
        required: true
    },
    PASSWORD: {
        title: 'Password',
        type: String,
        required: true
    }
}, {
        timestamps: true,
        collection: 'User'
    });

module.exports = mongoose.model('User', _schema );