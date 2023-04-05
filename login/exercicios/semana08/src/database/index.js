const Sequelize = require('sequelize')

const connection = new Sequelize({
    dialect: "postgres",
    host: 'localhost',
    username: 'postgres',
    password: 'Rp@882101',
    port: '5432',
    database: 'trindade',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }

})

module.exports = connection