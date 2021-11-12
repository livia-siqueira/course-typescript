// Exercício 1 - Classe


class Moto{
    constructor(public nome: string, public velocidade: number = 0) {}

    buzinar(){
        console.log('Tooooooooooot"');
    }

    acelerar(delta: number){
        this.velocidade = this.velocidade + delta;
    }
}

let moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)
 
// Exercício 2 - Herança

abstract class objeto2D{
    constructor(public base: number = 0, public altura: number=0) {}
    abstract area() : number
}

class retangulo extends objeto2D{
    area(): number {
        return this.base * this.altura;
    }
}

const newRetangulo = new retangulo(2,7)
console.log(newRetangulo.area());
 
// Exercício 3 - Getters & Setters

class Estagiario {
   private _primeironome : string = '';


   get PrimeiroNome() : string {
    return this._primeironome;
   }

   set PrimeiroNome(newName: string) {
    if (newName.length >= 3) {
        this._primeironome = newName
    } else {
        this._primeironome = ''
    }
   }
}

const newEstagiario = new Estagiario;
console.log(newEstagiario.PrimeiroNome)
newEstagiario.PrimeiroNome = 'Le' //erro pq tem menos de 3 letras
console.log(newEstagiario.PrimeiroNome)
newEstagiario.PrimeiroNome = 'Leonardo'
console.log(newEstagiario.PrimeiroNome)