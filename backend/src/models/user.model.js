// src/models/user.model.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config.js');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING(255),
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  tipo: {
    type: DataTypes.ENUM('alumno', 'tutor', 'administrador'),
    allowNull: false
  },
  // No es necesario definir createdAt y updatedAt, Sequelize los maneja automáticamente
}, {
  // otras opciones del modelo
});

module.exports = User;
