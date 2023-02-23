let dados
async function profile (){
    try {

        const response = await fetch("https://rickandmortyapi.com/api/character/34")
        dados = await response.json()

        console.log(dados)
        
        let cardProfile = document.getElementById('cardProfile')
        let since = dados?.created
        
        document.body.style.background = "black"
            cardProfile.innerHTML = `
            <img class="card-img-top" src="${dados?.image}" id="imgProfile">
            <div class="card-body">
                <h5 class="card-title">${dados?.name}</h5>
                <p class="card-text" >${dados?.gender}</p>
            </div>
            <ul class="list-group list-group-flush" id="infos">                      
                <li class="list-group-item">Species - ${dados?.species}</li>
                <li class="list-group-item">Status - ${dados?.status}</li>
                <li class="list-group-item">Since: ${since.substring(8,10)}/${since.substr(5,2)}/${since.substr(0,4)}</li>
               
            </ul>
            
            `




        
    } catch (e) {
        console.log(`Ops... Erro: ${e}`)
    }
}

profile()


