


document.getElementById('logoff').addEventListener('click',logoff =>{
    location = '../../index.html'
   // msg.innerText= 'Desconectado com sucesso.'
  //  msg.hidden = false 
    console.log('teste')
})
    



/*

Validar credenciais de login e armazenar em localstorage, caso já exista permanecer logado.


const studants = new Object();
let c = 1;
let newStudant;

const userEmail = 'reinaldo@teste.com.br';
const userPass = '123456';
let login = {};
let form = document.getElementById('form-login')
let msg = document.getElementById('error')
let fields = document.querySelectorAll('#form-login [id]')



form.addEventListener('submit',event =>{
    event.preventDefault()  

Object.entries(fields).forEach(([key, val])=>{   

        login[val.name] = val.value         
        
})    

let verifyStorage = JSON.parse(
    localStorage.getItem('access')
);

if(verifyStorage.user == login.email && verifyStorage.pass == login.password){
    location = './login/index.html'
        console.log('logado!')
}else{
    if(login.email == userEmail && login.password == userPass){
        location = './login/index.html'
        console.log('logado!')

        verifyStorage = {user: login.email, pass: login.password}
        localStorage.setItem('access', JSON.stringify(verifyStorage));

     }else{
         msg.hidden = false  
         console.log('Credenciais incorretas')   
     }

}
})
*/





/*


Exercicios da primeira semana
Inserir informção de 5 alunos
inserir da nota para eles
criar uma função para definir se foi aprovado ou não.

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
 */