const express = require('express');
const cors = require('cors');

class Server {

    constructor () {
        this.app = express()
        this.PORT = process.env.PORT;
        this.RutaUsers = '/api/usuarios';

        //Middlewares
        this.middlewares();

        // rutas de mi aplicación
        this.routes()
        
    }

    middlewares () {
        // Directorio Publico
        this.app.use(express.static('public'))
        // CORS
        this.app.use(cors())
        // Leer y parseo de body = datos
        this.app.use(express.json())

    }

    routes () {
        this.app.use(this.RutaUsers,require('../routes/user'))
    }

    listen () {
        
    this.app.listen(this.PORT,() =>{
    console.log('servidor corriendo', this.PORT);
});
    }

}

module.exports = Server;