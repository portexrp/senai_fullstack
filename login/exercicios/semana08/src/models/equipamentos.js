const { Sequelize } = require('sequelize');
const connection = require('../database/index');
const { types } = require('pg');

const equipamento = connection.define('Equipamento', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    

    description: {
        type: Sequelize.STRING
    }
})

module.exports = equipamento