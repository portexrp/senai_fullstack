

function addTask(task) {
    let div = document.createElement('div')
    div.id = Math.floor(Math.random() * 10000)



    let radioBtn = document.createElement('input');
    radioBtn.type = 'radio';
    radioBtn.name = 'radioBtn';
    radioBtn.id = task;


    task = task;

    

    let label = document.createElement('label');
    label.value = task
    let descriptionTask = document.createTextNode(task);
    label.appendChild(descriptionTask);

    label.style.marginLeft = "10px";
    let newLine = document.createElement('br');

    let container = document.getElementById('task');

    

    div.appendChild(radioBtn);
    div.appendChild(label);
    div.appendChild(newLine);
    container.appendChild(div)

    reset = document.getElementById('InputTask')
    reset.value = ''
    reset.focus()
}

document.getElementById('save').addEventListener('click', () => {
    let task = document.getElementById('InputTask').value
    addTask(task)
})

function addEdit(task) {

    let editChild = document.querySelectorAll('input[name="radioBtn"]');

    editChild.forEach(element => {

        if (element.checked) {

            edit = element.nextElementSibling
            edit.innerText = task
            edit.value = task
        }

    });

}

document.getElementById('edit').addEventListener('click', () => {

    let task = document.getElementById('InputTask').value
    addEdit(task)
})

function deleteTask(task) {

    let edit    
    let editChild = document.querySelectorAll('input[name="radioBtn"]');
    let removeDiv
    console.log(editChild)
    editChild.forEach(element => {

        if (element.checked) {
            
            edit = element.parentElement
            removeDiv = document.getElementById(edit.id)
            document.getElementById('task').removeChild(removeDiv)

        }

    });
           
}


document.getElementById('delete').addEventListener('click', () => {

    let task = document.getElementById('InputTask').value
    deleteTask(task)
})


function searchTask(task) {

    let search = document.querySelectorAll('label');
    let notFound = true
    
    search.forEach(element => {

        console.log(element.value , task)
            if(element.value == task){
                find = document.getElementById('find')
                find.innerText = `Tarefa ${task} encontrada com sucesso!`
                find.hidden = false
                notFound = false
            }
    });

    if(notFound){
        find = document.getElementById('find')
        find.innerText = `Tarefa ${task} não encontrada!`
        find.hidden = false
    }

}


document.getElementById('search').addEventListener('click', () => {

    let task = document.getElementById('InputTask').value
    searchTask(task)
})