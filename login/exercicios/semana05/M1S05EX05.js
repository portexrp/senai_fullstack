let vogais = ['a','e','i','o','u'];
let totalVogais = 0
let item = 'trabalheira'
for(c = 0; c < item.length + 1; c++){
  
   if (vogais.indexOf(item[c]) >= 0) {
      totalVogais++
  } 
  continue
}

console.log(`Total de vogais: ${totalVogais}`)