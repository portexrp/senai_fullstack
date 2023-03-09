let lista = ['Pedro','José', 'Aderbal', 'Danilo','Vitoria']

function verifica(val1,val2){
    
    let changeList
    for(let c= 0; c < lista.length; c++){

        if(val1 > lista.length-1 || val2 > lista.length-1){
            console.log('valores incorretos')

        }else{
            if(c == val1){
                changeList= lista[val2]
                lista[val2] = lista[val1]                
                
            }else if(c == val2){
                lista[0] = changeList             
                
            }
        }
    }
    
    lista.forEach(element => {
        console.log(element)
    });
}


verifica(0,2)
