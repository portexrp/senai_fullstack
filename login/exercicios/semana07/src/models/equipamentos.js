
const Sequelize=require('sequelize');
const database = require('./db.js')
const Equipamento = database.define( 'equipamento',{
	/* criando a tabela equipamento e os tributos */
	id:{
		type:Sequelize.INTEGER,
		autoIncrement:true,
		allowNull:false,
		primaryKey:true
	
	},
	
	nome:{
		type: Sequelize.STRING,
		allowNull:false		
		
	},
	
	
		preco:Sequelize.DECIMAL,
		descricao:Sequelize.STRING
	
	
})

module.exports = equipamento;