const studants = new Object();
let c = 1;
let newStudant;

for(c; c >= 1; c++){

    studants.name = prompt('Nome do Aluno');
    studants.height = prompt('Altura');
    studants.gender = prompt('Sexo');
    studants.age = prompt('Idade');
    studants.classRoom = prompt('Sala de Aula');

    Object.entries(studants).forEach(([key, value]) => {
        console.log(`${key}, ${value}`)
    });

    studants.classRoom = {math: prompt('Primeira nota de Matemática')};
    let note1 = parseFloat(studants.classRoom.math)
    console.log(`Nota um ${studants.classRoom.math} Aluno ${studants.name}` )

    

    studants.classRoom.math = prompt('Segunda nota de Matemática');
    console.log(`Nota Dois ${studants.classRoom.math} aluno ${studants.name}` )
    let note2 = parseFloat(studants.classRoom.math)

    function note(note1, note2) {
        finalNote = ((note1+note2) / 2)
        if( finalNote > 7){
            return `Nota Final = ${(note1+note2) / 2} aluno ${studants.name} APROVADO`
        }
        else{
            return `Nota Final = ${(note1+note2) / 2} aluno ${studants.name} REPROVADO`
        }
    }
    console.log(note(note1,note2))
    
    newStudant = window.confirm('Confirme para inserir o próximo aluno');
    
    if(!newStudant){
        c = -1
    }

    console.log('---------------------------------------------------------')
}
