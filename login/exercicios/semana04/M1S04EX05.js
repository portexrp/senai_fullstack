class Person{
    constructor(nome, idade, altura){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }

    apresentar(){
        console.log(`Olá me chamo ${this.nome}, tenho ${this.idade}
         anos e tenho ${this.altura} de altura`)
    }
}

class Profissao extends Person{
    constructor(nome, idade, altura, profissao){
        super(nome,idade,altura)
        this.profissao = profissao
    }

    profissao(){
        console.log(`Olá me chamo ${this.nome}, tenho ${this.idade}
         anos e tenho ${this.altura} de altura e minha profissão é ${this.profissao}`)
    }
}