const { Sequelize } = require('sequelize')
const connection = require('../database')

const Users = connection.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },

    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

module.exports = Users