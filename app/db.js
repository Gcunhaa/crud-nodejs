const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:postgres@postgres:5432/meegu', {dialect: 'postgres'});

module.exports = sequelize;
