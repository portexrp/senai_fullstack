const express = require('express');
const connection = require('./src/database')
const Place = require('./src/models/Places')
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
    
        return response.status(200).json({mensagem: "Usuário cadastrado com sucesso!"})
        
    } catch (error) {
        return response.status(400).json({mensagem: "Não foi possível processar sua solicitação."})
    }
    

})


app.get('/place', async (_request, response)=>{

    const allPlaces = await Place.findAll()
    console.log(allPlaces)

    response.status(201).json({allPlaces})

})

app.listen(3001)
