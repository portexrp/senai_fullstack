let dados
async function profile (){
    try {

        const response = await fetch("https://api.github.com/users/portexrp")
        dados = await response.json()

        console.log(dados)
        
        let cardProfile = document.getElementById('cardProfile')
        let since = dados?.created_at
        
        document.body.style.background = "black"
            cardProfile.innerHTML = `
            <img class="card-img-top" src="${dados?.avatar_url}" id="imgProfile">
            <div class="card-body">
                <h5 class="card-title">${dados?.name}</h5>
                <p class="card-text" >${dados?.bio}</p>
            </div>
            <ul class="list-group list-group-flush" id="infos">                      
                <li class="list-group-item">Nick Name - ${dados?.login}</li>
                <li class="list-group-item">Since: ${since.substring(8,10)}/${since.substr(5,2)}/${since.substr(0,4)}</li>
               
            </ul>
            
            `




        
    } catch (e) {
        console.log(`Ops... Erro: ${e}`)
    }
}

profile()


