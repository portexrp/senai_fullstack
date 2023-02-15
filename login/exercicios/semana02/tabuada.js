
function addLine(c,div,val){

    let label = document.createElement('p')
    label.innerText = ` ${div} x ${c} = ${val} `
    document.getElementById('divInput').appendChild(label)  
    
}


document.getElementById('tab').addEventListener('click', (event)=>{
    event.preventDefault();

    var div = document.getElementById('InputTabuada').value;
    
    for(c=1; c < 11; c++){
        
        val = 0
        var val = div * c
        addLine(c,div,val)
        
    }
})