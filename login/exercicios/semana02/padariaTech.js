
function addLine(c,div,val){

    let label = document.createElement('p')
    label.innerText = `  ${c} = R$ ${val} `
    document.getElementById('divInput').appendChild(label)  
    
}


document.getElementById('tab').addEventListener('click', (event)=>{
    event.preventDefault();

    var div = document.getElementById('InputProduto').value;
    
    for(c=1; c < 51; c++){
        
        val = 0
        var val = div * c
        addLine(c,div,val)
        
    }
})