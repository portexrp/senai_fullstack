const birthDay = '2023-12-01';


const today = parseFloat(Date.now())

const diffInDays = (parseFloat(Date.parse(birthDay)) - today) / (1000 * 60 * 60 * 24)

let showBirthday = document.getElementById('birthday')
if (diffInDays < 0 && diffInDays > -1) {
    showBirthday.innerText = 'Feliz Aniversário';
    showBirthday.hidden = false;
  } else if (diffInDays < -1) {
    showBirthday.innerText = 'Seu Aniversário passou amigão, cochilou o cachimbo cai!';
    showBirthday.hidden = false;
    
  } else {
    let daysLeft = Math.ceil(diffInDays)

    showBirthday.innerText = "Faltam "+daysLeft+" dias para o seu Aniversário cachorro do mato";
    showBirthday.hidden = false;

  }
  
  setInterval(() => {
    if (diffInDays < 0 && diffInDays > -1) {
      console.log("Feliz aniversário!");
    } else if (diffInDays < -1) {
      console.log("Seu Aniversário passou amigão, cochilou o cachimbo cai!");
    } else {
      console.log(
        `Faltam ${Math.ceil(diffInDays)} dias para o seu Aniversário cachorro do mato` );
    }
  }, 1000 * 3);