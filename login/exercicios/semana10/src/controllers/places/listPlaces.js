const Places= require('../../models/places')

async function listplaces (_request, response) {

    try {
        const allPlaces = await Places.findAll()
        response.status(201).json({ allPlaces })

    } catch (error) {
        return response.status(400).json({ mensagem: "Não foi possível processar sua solicitação." })
    }
}

module.exports = listplaces