
let btnAlterarCorAtiva = document.getElementById('alterarCorAtiva')

let btnColors = document.querySelectorAll('#alterColor'); // Adicione o seletor correto antes do nome da classe

btnAlterarCorAtiva.addEventListener('click', () => {
  btnColors.forEach((btn) => {
    btn.style.background = '#06bc37';
    console.log('passei aqui')
  });
});