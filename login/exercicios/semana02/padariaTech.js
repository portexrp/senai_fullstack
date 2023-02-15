let order
let subtotal = []
let total
let count = 2


//aqui vai pegar o total da conta
while(count){
   order = parseFloat(prompt('Digite o valor do produto ou cancele para informar finalizar'))
if(order){    

    subtotal.push(order)
    count = true
    console.log(subtotal) 
    
}else{

    count = false  
    console.log('sub total do else '+subtotal)  
}
}

order = 0 //aqui vai pegar o troco
/*
subtotal.forEach((element, key) => {
    console.log(element+' '+key)
    total += parseFloat(element)
    console.log('total '+total)
});1



for(c =0;c > subtotal.length -1;c++){
    
    total+= subtotal[c]
    console.log(c)
}
*/

subtotal.reduce(
    (totalfinal, element,key) =>{
        totalfinal += element
        order = parseFloat(prompt(`Deu o total de ${totalfinal}, troca p/ ?`))
        alert(`seu troco é ${order - totalfinal}`)
       
    }
)








