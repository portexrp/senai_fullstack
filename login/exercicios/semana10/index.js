require('dotenv').config()

const express = require('express');
const connection = require('./src/database')

const validateUser = require('./src/middlewares/validateUser')
const validateToken = require('./src/middlewares/validateToken');
const createPlaces = require('./src/controllers/places/createPlaces');
const listplaces = require('./src/controllers/places/listPlaces');
const deletePlaces = require('./src/controllers/places/deletePlaces');
const updatePlace = require('./src/controllers/places/updatePlaces');
const createUser = require('./src/controllers/users/createUser')
const sessionsUsers = require('./src/controllers/users/sessionsUsers')


const app = express()
app.use(express.json());
connection.authenticate()
connection.sync({ alter: true })

app.post('/place', validateToken, createPlaces)
app.get('/place', validateToken, listplaces)
app.delete('/place/:id', validateToken, deletePlaces)
app.put('/place/:id', validateToken, updatePlace)


app.post('/users', validateUser, createUser)
app.post('/sessions', sessionsUsers)


app.listen(3001)


