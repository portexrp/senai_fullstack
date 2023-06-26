
let btnAlterarCorAtiva = document.getElementById('alterarCorAtiva')
let content = document.getElementById('content')
let h1Hheader = document.getElementById('h1Header')
let btnColors = document.querySelectorAll('#alterColor'); // Adicione o seletor correto antes do nome da classe

btnAlterarCorAtiva.addEventListener('click', () => {
    content.style.background = '#fff'
    h1Hheader.style.color= '#000000'
  btnColors.forEach((btn) => {
    btn.style.background = '#06bc37';
    console.log('passei aqui')
    
  });
});


