const { Sequelize } = require('sequelize');
const connection = require('../databse/index');

const Users = connection.define('users', {

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },

    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Users;