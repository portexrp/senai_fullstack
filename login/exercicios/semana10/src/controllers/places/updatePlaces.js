const Places= require('../../models/places')

async function updatePlace (request, response) {

    try {
        const result = await Place.findByPk(request.params.id)

        if (!result) {
            return response.status(400).json({
                mensagem: "Id não localizado."
            })
        }

        result.name = request.body.name || result.name
        result.phone = request.body.phone || result.phone
        result.openingHours = request.body.openingHours || result.openingHours
        result.description = request.body.description || result.description
        result.latitude = request.body.latitude || result.latitude
        result.longitude = request.body.longitude || result.longitude
        result.user_id = request.body.user_id

        const updatePlace = await result.save()

        return response.status(201).json({
            mensagem: "dados atualizados com sucesso.",
            resultado: updatePlace
        })

    } catch (error) {
        return response.status(400).json({ mensagem: "Não foi possível processar sua solicitação." })
    }

}

module.exports = updatePlace