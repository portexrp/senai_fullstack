const Sequelize = require('sequelize')
const sequelize = new Sequelize('trindade', 'postgres', 'Rp@882101',{

	dialect:'postgres',
	host: 'localhost',
	port:'5432'
	
})

module.exports = sequelize;