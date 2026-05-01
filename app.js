const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./models');
const taskRoutes = require('./routes/task.routes');
const categoriaRoutes = require('./routes/categoria.routes');

app.use(cors());
app.use(express.json());
app.use('/api', taskRoutes);
app.use('/api', categoriaRoutes);

app.listen(3000, async () => {
    await db.sequelize.sync()
    console.log('Server is running on port 3000');
});