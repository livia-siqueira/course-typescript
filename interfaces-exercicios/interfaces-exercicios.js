"use strict";
function saudarOla(pessoa) {
    console.log("Ola " + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = "Joana";
}
const people = {
    nome: "João",
    idade: 19,
    saudar(sobrenome) {
        console.log("Ola, meu nome é " + this.nome + " e o sobrenome é " + sobrenome);
    },
};
saudarOla(people);
people.saudar("Siqueira");
mudarNome(people);
saudarOla(people);
people.saudar("Silva");
//saudarOla({nome: 'Livia', idade: 31, altura: 1.85})
//interface com classe
class Cliente {
    constructor() {
        this.nome = "";
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log("Ola, meu nome é " + this.nome + " e o sobrenome é " + sobrenome);
    }
}
const meuCliente = new Cliente;
meuCliente.nome = 'Livia';
meuCliente.saudar('Siqueira');
console.log(meuCliente);
console.log(meuCliente.ultimaCompra);
let potencia = function (base, expoente) {
    return Array(expoente).fill(base).reduce((ac, at) => ac * at);
};
console.log(potencia(2, 8));
class RealA {
    a() { } //necessita daquilo que A tem
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class AbstrataABD {
    a() { }
    b() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 3;
const z = 4;
x.log();
y.log();
z.log();
const cli = {
    nome: 'Pedro',
    toString() {
        return this.nome;
    }
};
cli.log();
//# sourceMappingURL=interfaces-exercicios.js.map