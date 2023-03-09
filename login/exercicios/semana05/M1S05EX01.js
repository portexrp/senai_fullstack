let lista = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Danilo', 'Luisa', 'Vitoria', 'Luis', 'José']
let newList = []

newList = lista.filter((index, element) => lista.indexOf(index) === element)

let removedList = lista.filter((index, element) => lista.indexOf(index) != element)

console.log(newList, removedList)