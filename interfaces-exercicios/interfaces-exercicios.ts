interface usuario {
  nome: string;
  idade?: number;
  [prop: string]: any;
  saudar(sobrenome: string): void;
}

function saudarOla(pessoa: usuario) {
  console.log("Ola " + pessoa.nome);
}

function mudarNome(pessoa: usuario) {
  pessoa.nome = "Joana";
}

const people: usuario = {
  nome: "João",
  idade: 19,
  saudar(sobrenome: string) {
    console.log(
      "Ola, meu nome é " + this.nome + " e o sobrenome é " + sobrenome
    );
  },
};

saudarOla(people);
people.saudar("Siqueira");
mudarNome(people);
saudarOla(people);
people.saudar("Silva");

//saudarOla({nome: 'Livia', idade: 31, altura: 1.85})


//interface com classe

class Cliente implements usuario {
  nome: string = "";
  ultimaCompra: Date =  new Date
  saudar(sobrenome: string) {
    console.log(
      "Ola, meu nome é " + this.nome + " e o sobrenome é " + sobrenome
    );
  }
}

const meuCliente = new Cliente
meuCliente.nome = 'Livia'
meuCliente.saudar('Siqueira');
console.log(meuCliente);
console.log(meuCliente.ultimaCompra);

//interaface funcao

interface FuncaoCalculo {
    (a:number, b:number): number
}

let potencia: FuncaoCalculo = function(base: number, expoente:number): number{
    return Array(expoente).fill(base).reduce((ac, at) => ac*at)
}
console.log(potencia(2,8))

//Herança com interfaces
interface A {
    a(): void
}

interface B {
    b(): void
}

interface ABC extends A, B {
    c(): void //tbm tem A, B
}

class RealA implements A {
    a(): void {} //necessita daquilo que A tem
}

class RealAB implements A, B {
    a(): void {}
    b(): void {}
}

class RealABC implements ABC {
    a(): void {}
    b(): void {}
    c(): void {}
}

abstract class AbstrataABD implements A, B {
    a(): void {}
    b(): void {}
    abstract d(): void
}

interface Object {
    log(): void
}

Object.prototype.log = function() {
    console.log(this.toString())
}

const x = 2
const y = 3
const z = 4

x.log()
y.log()
z.log()

const cli = {
    nome: 'Pedro',
    toString() {
        return  this.nome
    }
}
cli.log()


