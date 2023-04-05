const connection = require('./src/database')
const Equipamento = require('./src/models/equipamentos')

connection.authenticate()
connection.sync({alter: true})

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