let lista = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria'];

let insereLista = (value)=>{

    if(typeof value === 'string'){

        let nome = lista.find(element => element === value);        

        if(nome != null){
            console.log(`Nome ${nome} já cadastrado.`)
        }else{
            lista.push(value);
            console.log(`${value} cadastrado com sucesso`)
            console.log(lista);
        }
    }else{
        console.log(`${value} não permitido!`)
    }

}

insereLista(123456)
insereLista('Danilo')
insereLista('teste');