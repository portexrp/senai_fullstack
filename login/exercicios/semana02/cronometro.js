document.getElementById('chron').addEventListener('click', chron => {
    let timer = document.getElementById('timer');    
    let c = 0
    
    function teste () {
        if(c < 11){
            timer.innerText = c++
        }else{
            alert('O tempo acabou')
            clearInterval(cron)
        }        
    }    

    var cron = setInterval(teste, 1000)

    }
)
