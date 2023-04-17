const Users = require('../../models/users')
const jwt = require('jsonwebtoken');

async function sessionsUsers (request, response) {

    const result = await Users.findOne({
        where: {
            username: request.body.username
        }
    })

    if(!result){
        return response.status(409).json({
            mensagem: "Credenciais incorretas"
        })
    }

    const token = jwt.sign(
        {
            id: result.id
        },
            process.env.TOKEN_KEY,
        {
            expiresIn: '30m'
        })

    return response.status(201).json({
        name: result.name,
        nickname: result.nickname,
        token: token
    })
}

module.exports = sessionsUsers