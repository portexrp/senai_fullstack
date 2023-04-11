const express = require('express');
const connection = require('./src/database')
const Place = require('./src/models/Places');
const Places = require('./src/models/Places');
const app = express()
app.use(express.json());
connection.authenticate()
connection.sync({ alter: true })

app.post('/place', async (request, response) => {

    try {
        const newPlace = {
            name: request.body.name,
            phone: request.body.phone,
            description: request.body.description,
            openingHours: request.body.openinghours,
            latitude: request.body.latitude,
            longitude: request.body.longitude
        }

        await Place.create(newPlace)

        return response.status(200).json({ mensagem: "Usuário cadastrado com sucesso!" })

    } catch (error) {
        return response.status(400).json({ mensagem: "Não foi possível processar sua solicitação." })
    }


})


app.get('/place', async (_request, response) => {

    try {
        const allPlaces = await Place.findAll()
        response.status(201).json({ allPlaces })

    } catch (error) {
        return response.status(400).json({ mensagem: "Não foi possível processar sua solicitação." })
    }

})

app.delete('/place/:id', async (request, response) => {

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

})

app.put('/place/:id', async (request, response) => {

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

        const updatePlace = await result.save()

        return response.status(201).json({
            mensagem: "dados atualizados com sucesso.",
            resultado: updatePlace
        })

    } catch (error) {
        return response.status(400).json({ mensagem: "Não foi possível processar sua solicitação." })
    }



})


app.listen(3001)


