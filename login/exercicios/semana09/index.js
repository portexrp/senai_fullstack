const express = require('express');
//const connection = require('./src/database')
//const Place = require('./src/models/Places')
const app = express()
app.use(express.json());

app.post('/place',  (request, response) => {
    
    const place = {
        name: request.body.name,
        phone: request.body.phone,
        description: request.body.description,
        latitude: request.body.latitude,
        longitude: request.body.longitude
    }

})

app.listen(3001)
