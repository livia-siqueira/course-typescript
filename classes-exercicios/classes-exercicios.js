"use strict";
class Data {
    constructor(dia = 1, mes = "janeiro", ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(14, "julho", 2002);
aniversario.dia = 14;
const casamento = new Data(); //omitindo ()
casamento.ano = 2019;
console.log(casamento);
console.log(aniversario);
class DataEsperta {
    //Publicos por padrao
    constructor(dia = 1, mes = "janeiro", ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario2 = new DataEsperta(14, "julho", 2002);
aniversario.dia = 14;
const casamento2 = new DataEsperta(); //omitindo ()
casamento2.ano = 2019;
console.log(casamento2);
console.log(aniversario2);
class Carro {
    constructor(marca, modelo, velocidadeMáxima = 100) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMáxima = velocidadeMáxima;
        this.velocidadeAtual = 0;
    }
    alteraVelo(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const veloIsValid = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMáxima;
        if (veloIsValid) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual =
                delta > 0 ? (this.velocidadeAtual = this.velocidadeMáxima) : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alteraVelo(5);
    }
    frear() {
        return this.alteraVelo(-2);
    }
}
const car1 = new Carro("Carro1", "1", 185);
console.log(car1.acelerar());
console.log(car1.frear());
Array(50)
    .fill(0)
    .forEach(() => car1.acelerar());
console.log(car1.acelerar());
console.log(car1.acelerar());
Array(100)
    .fill(0)
    .forEach(() => car1.frear());
console.log(car1.frear());
class Gol extends Carro {
    constructor(modelo, vMaxima) {
        super("Gol", modelo, vMaxima);
    }
    acelerar() {
        return this.alteraVelo(25);
    }
    frear() {
        return this.alteraVelo(-12);
    }
}
const newGol = new Gol("G4", 180);
console.log(newGol.acelerar());
console.log(newGol.acelerar());
console.log(newGol.acelerar());
console.log(newGol.acelerar());
console.log(newGol.acelerar());
console.log(newGol.frear());
//getters e setters
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor > 0 && valor < 120)
            this._idade = valor;
    }
}
const p1 = new Pessoa;
p1.idade = 20; //chama automaticamente set
console.log(p1.idade); // chama automaticamente get
//atributos e metodos estaticos
class Matematica {
    static areaCirc(valor) {
        return this.PI * valor * valor;
    }
}
Matematica.PI = 3.14;
//const m1 = new Matematica(); //com static não precisa disso
//m1.areaCirc(4);
console.log(Matematica.areaCirc(4));
//classe abstrata - nao pode ser instanciada somente herdada
class Calculo {
    constructor() {
        this.result = 0;
    }
    get resultado() {
        return this.result;
    }
}
class Soma extends Calculo {
    executar(...numbers) {
        this.result = numbers.reduce((ac, at) => ac + at);
    }
}
class Multiplicacao extends Calculo {
    executar(...numbers) {
        this.result = numbers.reduce((ac, at) => ac * at);
    }
}
let c = new Soma();
c.executar(1, 2, 3, 4, 5);
console.log(c.resultado);
let c2 = new Multiplicacao();
c2.executar(1, 2, 3, 4, 5);
console.log(c2.resultado);
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date;
    }
}
Unico.instance = new Unico;
console.log(Unico.getInstance().agora());
//# sourceMappingURL=classes-exercicios.js.map