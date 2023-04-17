const {Sequelize} = require('sequelize')
const connection = require('../database')
const Users = require('./users')

const Places = connection.define('places',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING
    },
    openingHours: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING
    },
    latitude: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    longitude: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },

    user_id: {
        type: Sequelize.INTEGER
    }

}

)

Places.belongsTo(Users)
module.exports = Places