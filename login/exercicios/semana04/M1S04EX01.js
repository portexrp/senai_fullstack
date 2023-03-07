class CaixaRegistradora {
    constructor(codBarm, price, name, item) {
        this.codBar = codBarm
        this.price = price
        this.name = name
        this.item = item        
    }

   stock(){        

        const stock = {codBar: this.codBar, price: this.price, name: this.name}
        localStorage.setItem(`${this.codBar}`, JSON.stringify(stock));
    }
    set order(value){
        
        let verifyCodBar = JSON.parse(localStorage.getItem(this.codBar))
        if(verifyCodBar.codBar == this.codBar){
            const newOrder = {item: verifyCodBar.codBar, quantity: value};
            localStorage.setItem(`newOrder`, JSON.stringify(newOrder));
            return true
        }else{
            //throw new error
            console.log('erroe')
        }
        
        
    }

    get totalOrder (){

        return  this.totalOder.value
    }

    totalOrder(){
        let item = JSON.parse(localStorage.getItem('newOrder'));
        let itemPrice = JSON.parse(localStorage.getItem(this.codBar));
        let value = item.quantity * itemPrice.price;
        return value;
    }


    set payment(value){
        let pay = this.totalOrder()
        value = value - pay        
        return value
    }    
    get payment(){
        return this.payment.value
    }
    
}

class NewClient{
    constructor(client){
        this.client = client
    }

    insertClient(){
        
        const clientJson = {name: this.client}
        localStorage.setItem(`newClient`, JSON.stringify(clientJson));

    }
}

const newItem = new CaixaRegistradora(987654321,3.5,'Cereveja');
const client = new NewClient('Reinaldo');

newItem.stock();
newItem.order = '2';
newItem.totalOrder();
newItem.payment = 10






