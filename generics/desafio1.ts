

class Fila<T extends number | string>{
    private itemsFila: Array<T>
    constructor(...args: T[]) {
        this.itemsFila = args;
    }

    entrar(elemento: T){
        this.itemsFila.push(elemento);
    }

    proximo() : T{
        const itemOne = this.itemsFila[0];
        this.itemsFila.splice(0,1);
        return itemOne;
    }

    imprimir(){
        console.log(this.itemsFila)
    }
}

const newFila = new Fila<string>('Lívia', 'Gustavo', 'Pedro', 'Jorge')
console.log(newFila.entrar('Lucia'));
newFila.imprimir();
console.log(newFila.proximo());
newFila.imprimir();

const newFilaNumbers = new Fila<number>(12,13,14,15,90);
newFilaNumbers.imprimir();
console.log(newFilaNumbers.proximo());
console.log(newFilaNumbers.imprimir());
console.log(newFilaNumbers.entrar(2980));
newFilaNumbers.imprimir();