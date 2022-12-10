const { response, request } = require('express');



const usuariosGet = (req = request, res = response) => {

    const query = req.query;
    res.json({
        msg:'método get - Controlador',
        query
    })
  }

const usuariosPost = (req, res = response) => {
    const { nombre, edad } = req.body;
    res.json({
        msg:'método post - Controlador',
        nombre,
        edad
    })
  }

const usuariosPUT = (req, res = response) => {
    const id = req.params.id
    res.json(
        {msg:'método put - Controlador',
          id  
    })
}  

const usuariosPatch = (req, res = response) => {
    res.json({
        msg:'método patch - Controlador'
    })
}

const usuariosDelete = (req, res= response) => {
    res.json({
        msg:'método delete - Controlador'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPUT,
    usuariosPatch,
    usuariosDelete
}