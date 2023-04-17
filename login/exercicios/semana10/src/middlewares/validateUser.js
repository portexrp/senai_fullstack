const yup = require('yup')

const validation = yup.object().shape({

    name: yup.string("O nome deve ser uma string").required("Nome é obrigatório."),

    email: yup
    .string("Email deve ser uma string")
    .required("Email é obrigatório"),

    name: yup.string("O Username deve ser uma string").required("Username é obrigatório."),

    password: yup
    .string("Senha deve ser uma string.")
    .min(8,"A senha deve ter no mínimo 8 caracteres.")
    .required("senha é obrigatório.")

})


const validadeNewUser = (request, response, next) =>{
    try {
        validation.validateSync(request.body)
        next()
    } catch (error) {
        //pega o erro com de validação e retorna em json "mensagem: error.message" onde 'error' é do try e 'message' do YUP
        response.status(400).json({
            mensagem: error.message
        })
    }
    
}

module.exports = validadeNewUser