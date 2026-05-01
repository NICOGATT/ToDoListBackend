const { Tarea } = require('../models');

const getTasks = async (req, res) => {
    try {
        const tasks = await Tarea.findAll();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createTask = async (req, res) => {
    try {
        const { nombre, descripcion, disponible } = req.body;
        if(!nombre || !descripcion) {
            return res.status(400).json({ message: 'Name and description are required' });
        }
        const newTask = await Tarea.create({ 
            nombre, 
            descripcion, 
            disponible : disponible || false
        });
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion, disponible } = req.body;
        const task = await Tarea.findByPk(id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        await task.update({ nombre, descripcion, disponible }, { where: { id } });
        await task.reload(); 
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}; 

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Tarea.findByPk(id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        await task.destroy();
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}; 

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask
}

