const connection = require('./src/database')
const Equipamento = require('./src/models/equipamentos')

connection.authenticate()
connection.sync()

let insert = Equipamento.create({
    name: "Esteira",
    
    descricao: "Corrida"
})

console.log(insert)