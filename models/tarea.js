'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tarea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tarea.belongsTo(models.Categoria, {
        foreignKey: 'categoriaId',
        as: 'categoria'
      })
    }
  }
  Tarea.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    disponible: DataTypes.BOOLEAN, 
    categoriaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tarea',
  });
  return Tarea;
};