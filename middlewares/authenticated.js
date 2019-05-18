'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave_secreta_custom';

exports.ensureAuth = function(req, res, next){
    if(!req.headers.authorization){
     return res.status(403).send({message:'enviar token en cabezera'});
    }
    var token = req.headers.authorization.replace(/['"]+/g,'');
    
    try{
        var payload = jwt.decode(token, secret);
            
        if(payload.ext <= moment().unix()){
            return res.status(401).send({
                message: 'ERROR Token expirado'  
            });
        }
    }catch(ex){
        return res.status(404).send({
            message: 'Token invalido'
        });
    }

    req.user = payload;

    next();

}

