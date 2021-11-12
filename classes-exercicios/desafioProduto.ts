

class Produto{
    constructor(public nome: string, public preco: number, public desconto : number = 0) {}
    
    calcDesconto() : number{
        return this.preco - (this.preco * this.desconto)
    }
    
    public viewProduct () {
        return `O produto ${this.nome} custa ${this.preco}. Com desconto de ${this.desconto} sairá por ${this.calcDesconto()}`
    }
}

const produto1 = new Produto('Arroz', 19.90);
const produto2 = new Produto('Óleo', 12.90, 0.5);

console.log(produto1.viewProduct())
console.log(produto2.viewProduct())
