const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('myalarm', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres', // Assurez-vous que c'est 'postgres' si vous utilisez PostgreSQL
});

module.exports = sequelize;