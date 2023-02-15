let order
let subtotal = []
let total
let count = 2



while(count){
   order = parseFloat(prompt('Digite o valor do produto ou cancele para informar finalizar'))
if(order){    

    subtotal.push(order)
    count = true    
    
}else{
    count = false      
}
}

order = 0 

subtotal.reduce(
    (totalfinal, element,key) =>{
        totalfinal += element
        order = parseFloat(prompt(`Deu o total de ${totalfinal}, troca p/ ?`))
        alert(`seu troco é ${order - totalfinal}`)
       
    }
)








