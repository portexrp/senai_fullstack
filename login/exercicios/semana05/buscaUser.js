let list = ['Pedro','José', 'Aderbal', 'Danilo','Vitoria']


function findUser(nome) {
    let user = list.findIndex(name => name == nome)

    if(user != -1){
        console.log('Usuário removido'+list[user])
       list.splice(user,1) 
       
    }
    list.forEach(element => {
        console.log(element)
    });
}

findUser('Pedro')
