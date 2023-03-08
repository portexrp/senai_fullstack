class Conta{

    #saldo = 10;
    #senha = 123456;
    

    constructor(saldo, senha){
        this.#saldo = saldo
        this.#senha = senha
    }

    get senha(){
        return this.senha;
    }

    get saldo(){
        return this.saldo;
    }

    set retirada(value){

        if(this.senha == this.senha){
            if(saldo >= value){
                return `Saque no valor de ${value} efetuado com sucesso`
            }else{
                return "Saldo Insuficiente"            
            }
        }else{
            return "Senha inválida";
        }
    }

    set deposito(value){
        if(this.senha == this.senha){            
            this.#saldo = this.saldo + value
        }else{
            return "Senha inválida";
        }
    }

}


class ContaPoupanca extends Conta {

    constructor(senha, saldo){

        super(senha,saldo)
    }

    atualizaJuros(){
        this.saldo += ((this.saldo / 100) * 0.7)
    }
}

class PoupancaPremium extends ContaPoupanca{

    constructor(senha,saldo){
        super(senha,saldo)
    }

    atualizaJuros(){
        this.saldo += ((this.saldo / 100) * 1.2)
    }
}