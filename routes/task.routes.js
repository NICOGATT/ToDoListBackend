const {Router} = require('express');
const router = Router();
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/task.controllers');

router.get('/tasks', getTasks);
router.post('/tasks', createTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

module.exports = router;
