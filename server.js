'use strict'

let mongoose = require('mongoose');
let app = require('./app');
let port = 3000;

// conexion base de datos
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mymodel', { useNewUrlParser: true })
    .then(() => {
        app.listen(port, () => {
            console.log("server on port " + port);
        })
    })
    .catch(err => console.log(err));