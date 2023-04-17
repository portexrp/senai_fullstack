const Places= require('../../models/places')

async function deletePlaces (request, response) {

    try {
        const result = await Place.findByPk(request.params.id)
        if (!result) {
            return response.status(400).json({
                mensagem: "Id não localizado."
            })
        }

        await Place.destroy({
            where: {
                id: request.params.id
            }
        })
        return response.status(201).json({ mensagem: "Excluido com sucesso." })

    } catch (error) {
        return response.status(400).json({ mensagem: "Não foi possível processar sua solicitação." })
    }

}

module.exports = deletePlaces