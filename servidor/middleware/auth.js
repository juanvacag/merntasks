const { json } = require('express');
const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    //leer el token del header
    const token = req.header('x-auth-token');

    //revisar sino hay token
    if(!token) {
        return res.status(401).json({ msg: 'No hay token, permiso no valido'})
    }

    //validar el token
    try {
        const cifrado = jwt.verify(token, process.env.SECRETA);
        req.usuario = cifrado.usuario;
        next();
    } catch (error) {
        res.status(401).json({ msg: 'Token no válido'});
    }

    
}