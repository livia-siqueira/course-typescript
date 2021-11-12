class Data {
  //Publicos por padrao
  dia: number;
  public mes: number;
  ano: number;

  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}

const aniversario = new Data(14, 12, 2002);
aniversario.dia = 14;

const casamento = new Data(); //omitindo ()
casamento.ano = 2019;
console.log(casamento);

console.log(aniversario);

class DataEsperta {
  //Publicos por padrao
  constructor(
    public dia: number = 1,
    public mes: string = "janeiro",
    public ano: number = 1970
  ) {}
}

const aniversario2 = new DataEsperta(14, "julho", 2002);
aniversario.dia = 14;

const casamento2 = new DataEsperta(); //omitindo ()
casamento2.ano = 2019;
console.log(casamento2);

console.log(aniversario2);

class Carro {
  private velocidadeAtual: number = 0;

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMáxima: number = 100
  ) {}

  protected alteraVelo(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta;
    const veloIsValid =
      novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMáxima;
    if (veloIsValid) {
      this.velocidadeAtual = novaVelocidade;
    } else {
      this.velocidadeAtual =
        delta > 0 ? (this.velocidadeAtual = this.velocidadeMáxima) : 0;
    }

    return this.velocidadeAtual;
  }

  public acelerar(): number {
    return this.alteraVelo(5);
  }

  public frear(): number {
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
  constructor(modelo: string, vMaxima: number) {
    super("Gol", modelo, vMaxima);
  }

  public acelerar(): number {
    return this.alteraVelo(25);
  }

  public frear(): number {
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
  private _idade: number = 0;

  get idade(): number {
    return this._idade;
  }

  set idade(valor: number) {
    if (valor > 0 && valor < 120) this._idade = valor;
  }
}

const p1 = new Pessoa;

p1.idade = 20; //chama automaticamente set
console.log(p1.idade) // chama automaticamente get

//atributos e metodos estaticos
class Matematica {
    static PI: number = 3.14;

    static areaCirc(valor: number){
        return this.PI * valor * valor;
    }
}
//const m1 = new Matematica(); //com static não precisa disso
//m1.areaCirc(4);
console.log(Matematica.areaCirc(4));
 
//classe abstrata - nao pode ser instanciada somente herdada

abstract class Calculo{
    protected result : number = 0;

    abstract executar(...numbers: number[]): void

    get resultado(): number{
        return this.result;
    }
} 

class Soma extends Calculo{
        executar(...numbers: number[]): void {
            this.result = numbers.reduce((ac, at) => ac + at)
        }
}

class Multiplicacao extends Calculo{
    executar(...numbers: number[]): void { //obrigacao executar essa função
        this.result = numbers.reduce((ac, at) => ac * at)
    }
}

let c: Calculo = new Soma();
c.executar(1,2,3,4,5);
console.log(c.resultado);

let c2 = new Multiplicacao();
c2.executar(1,2,3,4,5);
console.log(c2.resultado);


class Unico {
    private static instance: Unico = new Unico
    private constructor(){}

    static getInstance(): Unico {
        return Unico.instance
    }

    agora(){
        return new Date
    }
}

console.log(Unico.getInstance().agora());