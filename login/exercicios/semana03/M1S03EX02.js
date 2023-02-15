let number = document.getElementById('InputNumber')
let msg = document.getElementById('InputMessage')
let send = document.getElementById('send')

function fncMsg(addMsg) {
    
    send.addEventListener('click',()=>{
        window.open(addMsg)
    })
}

document.getElementById('msg').addEventListener('click',()=> {
    sendNumber = number.value
    sendMsg = msg.value    
    if(sendNumber != '' && sendMsg != ''){   
        let url =  'https://api.whatsapp.com/send?phone='+sendNumber+'&text='+sendMsg     
        send.disabled = false
        fncMsg(url)
    }else{
        alert('Todos os campos são obrigatórios')         
    }
})