const bcrypt = require('bcrypt')

async function createUser (request, response) {

    try {
        const result = await Users.findOne({
            where: {
                username: request.body.username
            }
        })

        if (result) {
            return response.status(409).json({
                mensagem: `Usuário ${result.username} já cadastrado.`
            })
        }
        const password = hash.bcrypt(request.body.password, 10)
        const user = {
            name: request.body.name,
            email: request.body.email,
            username: request.body.username,
            password: password
        }

        const newUser = await Users.create(user)

        return response.status(201).json(newUser)


    } catch (error) {
        return response.status(400).json({ mensagem: "Não foi possível processar sua solicitação." })
    }
}

module.exports = createUser