// string
let nome: string = "Livia";
console.log(nome);
//nome = 28; tipo invalido

//number
let idade: number = 27;
console.log(idade);
//idade = 'Ana' tipo invalido
idade = 27.5; //não diferencia pelos pontos flutuantes
console.log(idade);

//boolean
let myBoolean: boolean = false;
console.log(myBoolean);
//myBoolean = 1; invalido, gera arquivo mesmo com o erro.

//tipo n
let minhaIdade; //tipo não explicito
minhaIdade = 27;
console.log(minhaIdade);
minhaIdade = { nome: "Livia" };
console.log(minhaIdade);

//array

let names: any[] = ["Livia", "Carlos", "Lucia"]; //array com qualquer tipo no interior
console.log(names[0]);
console.log(typeof names);
names = [1, 2, 3, 4, 5, 6]; //continua sendo um array
console.log(names);

//tuplas (2 srings, 3 numbers)

let arrayTest: [string, number] = ["Av principal", 19];
console.log(arrayTest);
arrayTest = ["My street", 140];
console.log(arrayTest);

//Enums - valores pre-definidos (meses, dias da semana, genero de filmes)
enum DiasDaSemana {
  Segunda = 1, 
  Terça = 2, 
  Quarta = 3, 
  Quinta = 4, 
  Sexta = 5,
}
let today: DiasDaSemana = DiasDaSemana.Quinta;
console.log(today);

//any - volta pro cenario js

let carro: any = 'Car';
console.log(carro);
carro = {
    nome: 'nome',
    marca: 'marca',
    ano: 'ano',
}
console.log(carro)

//tipos em funções

function myNameTR(): string{
    return nome;
}
console.log(myNameTR())

function digaOi(): void{
    console.log('Oi')
}
digaOi();

function multiplication(a: number,b: number): number //retorno
{
    return a*b;
}
console.log(multiplication(5,8));

const myFunction = (a: number, b: number): boolean => {
    return a === b;
}
console.log(myFunction(4,5));

let calculo;
calculo = digaOi;
calculo();

calculo = multiplication
calculo(8,9);

let calcula2: (num1: number, num2: number) =>  number //só recebe uma função igual a esse tipo definido
calcula2 = multiplication;
console.log(calcula2(4,5));

//objetos e tipos
let user: {nome: string, idade: number} = {
    nome: 'Livia', 
    idade: 27
}
console.log(user.nome)
/*user = {
    nome: 27,
    idade: 'Maria'
}*/ //propriedades obedecem o tipo


//Union Types

let nota: string | number = 10;
console.log(`minha nota é: ${nota}`)

//checar tipos

let valor= 20;
if(typeof valor === 'number'){
    console.log('isNumber!!')
}else{
    console.log(typeof valor);
}

//never - erro ou loop - é o ponto final de algo
function falha(msg: string): never{
    throw new Error(msg)
}

const prod = {
    nome: 'Sabao',
    preco: 1,
    validarProduto(){
        if(!this.nome || this.nome.trim().length == 0){
            falha('Da um nome ai');
        }
        if(this.preco <= 0){
            falha('preço errado');
        }
    }
}
prod.validarProduto();

//Tipo Null (se tornou verdadeiro)

let altura = 12;
//altura = null; //valor obrigatorio

let alturaOpcional: null | number;
alturaOpcional = 12;
alturaOpcional = null;


type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: 'Livia',
    tel1: '998392963',
    tel2: null
}

const contato2: Contato = {
    nome: 'Lucia',
    tel1: '40028922',
    tel2: '657908'
}
console.log(contato1, contato2);

let podeSerNulo = null; //any
let soNulo : null = null; //só null







