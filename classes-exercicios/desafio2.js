"use strict";
// Exercício 1 - Classe
class Moto {
    constructor(nome, velocidade = 0) {
        this.nome = nome;
        this.velocidade = velocidade;
    }
    buzinar() {
        console.log('Tooooooooooot"');
    }
    acelerar(delta) {
        this.velocidade = this.velocidade + delta;
    }
}
let moto = new Moto('Ducati');
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
// Exercício 2 - Herança
class objeto2D {
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
    }
}
class retangulo extends objeto2D {
    area() {
        return this.base * this.altura;
    }
}
const newRetangulo = new retangulo(2, 7);
console.log(newRetangulo.area());
// Exercício 3 - Getters & Setters
class Estagiario {
    constructor() {
        this._primeironome = '';
    }
    get PrimeiroNome() {
        return this._primeironome;
    }
    set PrimeiroNome(newName) {
        if (newName.length >= 3) {
            this._primeironome = newName;
        }
        else {
            this._primeironome = '';
        }
    }
}
const newEstagiario = new Estagiario;
console.log(newEstagiario.PrimeiroNome);
newEstagiario.PrimeiroNome = 'Le'; //erro pq tem menos de 3 letras
console.log(newEstagiario.PrimeiroNome);
newEstagiario.PrimeiroNome = 'Leonardo';
console.log(newEstagiario.PrimeiroNome);
//# sourceMappingURL=desafio2.js.map