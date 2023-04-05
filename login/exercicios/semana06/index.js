const express = require('express');
const app = express();

app.listen('3333');

app.use(express.json());

app.get('/', (request, response) => {
    response.send({ mensagem: 'Bem vindo a API de usuários.' })
})

app.post('/include', (request, response) => {

    let newUser = {name: request.body.name,
                    age: request.body.age,
                  pWork: request.body.pWork,
                   pass: request.body.password
                }

    if (newUser.age < 21) {
        return response.send({ mensagem: `Usuário ${newUser.name} não possui idade suficiente` })
    } if (!newUser.name || !newUser.age || !newUser.pWork || !newUser.pass) {
        response.status(406).json({ mensagem: "Está faltando dados para concluir a operação" })

    } else {
        //insere os dados no banco e retorna o sucesso da inclusão
        response.send({ mensagem: `Usuário ${newUser.name} criado com sucesso` })
        console.log(newUser.name)
    }

})

app.delete('/delete/:id', (request, response) => {
    
    let deleteUser = request.params.id
    
    if(!deleteUser?.id){
        
        return response.status(406).json({mensagem: "Está faltando dados para concluir a operação"})
    }
    //deleta os dados no banco e retorna o sucesso
    response.send({ mensagem: `Usuário ${deleteUser.id} deletado com sucesso` })
})