

function addTask(task) {
    let radioBtn = document.createElement('input');
    radioBtn.type = 'radio';
    radioBtn.name = 'radioBtn';
    radioBtn.id = task;


    task = ' - ' + task;

    let label = document.createElement('label');
    label.id = task
    let descriptionTask = document.createTextNode(task);
    label.appendChild(descriptionTask);

    let newLine = document.createElement('br');

    let container = document.getElementById('task');
    container.appendChild(radioBtn);
    container.appendChild(label);
    container.appendChild(newLine);

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
            edit.innerText = '- ' + task
        }

    });

}

document.getElementById('edit').addEventListener('click', () => {

    let task = document.getElementById('InputTask').value
    addEdit(task)
})

function deleteTask(task) {

    let editChild = document.querySelectorAll('input[name="radioBtn"]');

    let edit = document.querySelectorAll('div[name="task"]');
    teste = edit[0].childNodes

    console.log(teste)
    
    teste.forEach((element, key) => {

        if (element.checked) {
            
           element.remove(edit[0].childNodes[key])

        }

    });
}


document.getElementById('delete').addEventListener('click', () => {

    let task = document.getElementById('InputTask').value
    deleteTask(task)
})