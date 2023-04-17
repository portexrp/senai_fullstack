const Places = require('../../models/places')

async function createPlaces (request, response) {

    try {
        const newPlace = {
            name: request.body.name,
            phone: request.body.phone,
            description: request.body.description,
            openingHours: "request.body.openinghours",
            latitude: request.body.latitude,
            longitude: request.body.longitude,
            user_id: request.body.user_id
        }

        await Place.create(newPlace)
        
        return response.status(200).json({ mensagem: "Local cadastrado com sucesso!" })

    } catch (error) {
        
        return response.status(400).json({ mensagem: "Não foi possível processar sua solicitação." })
    }


}

module.exports = createPlaces