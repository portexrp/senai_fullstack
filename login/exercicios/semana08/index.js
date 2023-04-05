const connection = require('./src/database')
const Equipamento = require('./src/models/equipamentos')

connection.authenticate()
connection.sync({alter: true})

/* insert statement*/
try {
    let insert = Equipamento.create({
        name: "Esteira",
        preco: 1500,
        descricao: "Corrida"
    })
    
    console.log(insert)
} catch (error) {
    return response.status(404)
            .json({ mensagem: "Não conseguimos processar sua solicitação." })
}

/* update statement*/

try {
    const updateEquipamento = await Equipamento.findByPk(request.params.id)
    console.log(updateTask)
    if (!updateEquipamento) {
        return response.status(404)
            .json({ mensagem: "Não conseguimos processar sua solicitação." })
    }

    updateEquipamento.name = request.body.name;
    updateEquipamento.description = request.body.description

    await updateEquipamento.save()

    response.status(201).json(updateEquipamento)

} catch (error) {
    return response
        .status(404)
        .json({ mensagem: "Não conseguimos processar sua solicitação." })
}


/* delete statement*/
try {

    await Equipamento.destroy({
        where: {
            id: request.params.id
        }
    })

    response.status(200).json({ message: 'deletado com sucesso' })
   

} catch (error) {
    response.status(500).json({ message: 'Não conseguimos processar sua solicitação.' })
}

