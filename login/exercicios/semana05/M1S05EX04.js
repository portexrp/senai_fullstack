arrayList = [

    {nome: "luis", idade: 26},
    
    {nome: "norma", idade: 16},
    
    {nome: "daiana", idade: 26},
    
    {nome: "jorge", idade: 16},
    
    {nome: "kauan", idade: 16},
    
    {nome: "charles", idade: 26},
    
    {nome: "marco", idade: 16},
    
    {nome: "bruno", idade: 16}
    
    ];

    let underAge = [];
    let adult = [];



    for(let c = 0; c <= arrayList.length -1; c++){

        if(arrayList[c].idade > 18){
            //console.log(arrayList[c].nome)
            let addUser = arrayList[c].nome
            //console.log(addUser);
            adult.push(addUser); 
            
          }else{
            underAge.push(arrayList[c].nome);        
          } 
    }
 


    console.log(`Menores de idade: ${underAge}`);
    console.log(`Maiores de idade: ${adult}`);