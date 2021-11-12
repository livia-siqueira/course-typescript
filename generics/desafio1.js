"use strict";
class Fila {
    constructor(...args) {
        this.itemsFila = args;
    }
    entrar(elemento) {
        this.itemsFila.push(elemento);
    }
    proximo() {
        const itemOne = this.itemsFila[0];
        this.itemsFila.splice(0, 1);
        return itemOne;
    }
    imprimir() {
        console.log(this.itemsFila);
    }
}
const newFila = new Fila('Lívia', 'Gustavo', 'Pedro', 'Jorge');
console.log(newFila.entrar('Lucia'));
newFila.imprimir();
console.log(newFila.proximo());
newFila.imprimir();
const newFilaNumbers = new Fila(12, 13, 14, 15, 90);
newFilaNumbers.imprimir();
console.log(newFilaNumbers.proximo());
console.log(newFilaNumbers.imprimir());
console.log(newFilaNumbers.entrar(2980));
newFilaNumbers.imprimir();
//# sourceMappingURL=desafio1.js.map