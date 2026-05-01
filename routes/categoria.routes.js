const {Router} = require('express');
const router = Router();
const { getCategorias, createCategoria, updateCategoria, deleteCategoria } = require('../controllers/categoria.controllers');

router.get('/categorias', getCategorias);
router.post('/categorias', createCategoria);
router.put('/categorias/:id', updateCategoria);
router.delete('/categorias/:id', deleteCategoria);

module.exports = router;