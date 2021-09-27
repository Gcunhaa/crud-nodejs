const Sequelize = require('sequelize');
const database = require('../db');

const User = database.define('users',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    birthdate: {
        type: Sequelize.DATEONLY,
    },
    document: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    acceptedTerms: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    accessCount: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    street: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    neighborhood: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    state:{
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = User;