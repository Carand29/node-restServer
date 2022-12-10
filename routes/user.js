const { Router } = require('express');
const { usuariosGet, usuariosPost, usuariosPUT, usuariosPatch, usuariosDelete } = require('../controllers/user');
const router = Router();


router.get('/', usuariosGet)

  router.post('/', usuariosPost)

  router.put('/:id', usuariosPUT)

  router.patch('/', usuariosPatch)

  router.delete('/', usuariosDelete)

module.exports = router;