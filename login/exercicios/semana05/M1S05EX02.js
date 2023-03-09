let usuarios = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']

let frutas =[ 'Banana', 'Morango', 'Maçã', 'Uva', 'Pêra', 'Laranja']
let i = frutas.length -1;
let result= [];

for(let c = 0; c < usuarios.length; c++){
    result.push(`${usuarios[c]} - ${frutas[i]}`)
    i--    
}

console.log(result)
