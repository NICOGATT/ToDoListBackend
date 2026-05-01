const {Categoria, Tarea} = require('../models');

const getCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.findAll({
            atributes : ['nombre'], 
            include : {
                model : Tarea, 
                as :"tareas",
                atributes : ['nombre', 'descripcion', 'disponible']
            }
        });
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createCategoria = async (req, res) => {
    try {
        const {nombre} = req.body; 
        if(!nombre) {
            return res.status(400).json({ message: 'Name is required' });
        }
        const newCategoria = await Categoria.create({ nombre });
        res.status(201).json(newCategoria);
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
}

const updateCategoria = async (req, res) => {
    try {
        const {id} = req.params; 
        const {nombre} = req.body;
        const categoria = await Categoria.findByPk(id);
        if(!categoria) {
            return res.status(404).json({ message: 'Category not found' });
        }
        await categoria.update({ nombre });
        categoria.reload();
        res.json(categoria);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteCategoria = async (req, res) => {
    try {
        const {id} = req.params;    
        const categoria = await Categoria.findByPk(id);
        if(!categoria) {
            return res.status(404).json({ message: 'Category not found' });
        }
        await categoria.destroy();
        res.json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }   
}

module.exports = {
    getCategorias,
    createCategoria,
    updateCategoria,
    deleteCategoria
}