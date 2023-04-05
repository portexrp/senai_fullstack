const express = require('express');
const connection = require('./databse')
const Users = require('./models/user')
const Task = require('./models/task')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express();

app.listen(3000, () => console.log('Aplicação online'));
app.use(express.json())

connection.authenticate()
connection.sync({ alter: true })


app.get('/tarefas', async (req, res) => {

    try {
        const allTask = await Task.findAll()
        res.json(allTask)
    } catch (error) {
        res.status(500).json({ mensagem: 'Não foi possível listar os dados' })
    }

})

app.post('/tarefas', async (request, response) => {

    const tarefa = {
        name: request.body.name,
        description: request.body.description
    }

    if (!tarefa.name) {
        return response.status(400).json({ mensagem: 'Campo nome é obrigatório' })
    }

    let verifyTask = await Task.findOne({
        where: {
            name: tarefa.name
        }
    })
    verifyTask instanceof Task;

    if (verifyTask?.name) {
        let lowerSelect = verifyTask.name

        if (lowerSelect.toLowerCase() === tarefa.name.toString().toLowerCase()) {
            return response.status(400).json({ mensagem: `Tarefa ${tarefa.name} já existe.` })
        }

        try {
            const newTask = await Task.create(tarefa)
            response.status(201).json(newTask)
        } catch (error) {
            response.status(500).json({ mensagem: 'Não conseguimos processar sua solicitação.' })
        }
    }

    try {
        const newTask = await Task.create(tarefa)
        response.status(201).json(newTask)
    } catch (error) {
        response.status(500).json({ mensagem: 'Não conseguimos processar sua solicitação.' })
    }
})


app.put('/tarefas/:id', async (request, response) => {

    try {
        const updateTask = await Task.findByPk(request.params.id)
        console.log(updateTask)
        if (!updateTask) {
            return response.status(404)
                .json({ mensagem: "Não conseguimos processar sua solicitação." })
        }

        updateTask.name = request.body.name;
        updateTask.description = request.body.description

        await updateTask.save()

        response.status(201).json(updateTask)

    } catch (error) {
        return response
            .status(404)
            .json({ mensagem: "Não conseguimos processar sua solicitação." })
    }

})

app.post('/users', async (request, response) => {

    try {
        const verifyUser = await Users.findOne({
            where: {
                cpf: request.body.cpf
            }
        })
    
        if (verifyUser) {
            return response.status(409).json({ mensagem: 'Usuário já cadastrado!' })
        }
    
    
        const hash = await bcrypt.hash(request.body.password, 10)
    
        const newUser = {
            name: request.body.name,
            cpf: request.body.cpf,
            password: hash
        }
    
        await Users.create(newUser);
    
        response.json({
            name: newUser.name,
            cpf: newUser.cpf,
            password: hash
        })
    
        
    } catch (error) {
        return response.status(500).json({ mensagem: "Não foi possível atender sua solicitação" })
    }
    
})

app.post('/users/login', async (request, response) => {
        
try {

    if (!request.body.cpf) {
        return response.status(403).json({ mensagem: "Usuário ou Senha inválido" })
    }

    const login = await Users.findOne({
        where: {
            cpf: request.body.cpf
        }
    });

    if (!login || request.body.cpf == '') {
        return response.status(403).json({ mensagem: "Usuário ou Senha inválido" })
    };

    const pass = bcrypt.compare(request.body.password, login.password);

    if (!pass) {
        return response.status(403).json({ mensagem: "Usuário ou Senha inválido" })
    };

    const token = jwt.sign(
        {
        id: login.id
        }, 
            'secret_key',
        {
            expiresIn: '30m'
        } 
    )
    response.json({name: login.name, token: token})
    
} catch (error) {
    return response.status(500).json({ mensagem: "Não foi possível atender sua solicitação" })
}
   

})

