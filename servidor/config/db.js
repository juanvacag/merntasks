const mongoose = require('mongoose');
require('dotenv').config({ path:'variables.env'});

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO);
        console.log('Base de Datos Conectada')
    } catch (error) {
        console.log(error);
        process.exit(1); // en caso de que haya un error en la conexion, detiene la APP.
    }
}

module.exports = conectarDB;