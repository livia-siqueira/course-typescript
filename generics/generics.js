"use strict";
function myName1(objeto) {
    return objeto;
}
console.log(myName1('Joao').length);
console.log(myName1(27).length); //undefined
console.log(myName1({ nome: 'Livia', idade: 19 }));
//generic
function myName(objeto) {
    return objeto;
}
console.log(myName('Joao').length); //inferencia 
console.log(myName(27)); //T -> number --> nao tem length definido aqui
console.log(myName({ nome: 'Livia', idade: 19 }));
//com arrays
const Avalicaoes = [10, 2, 34, 5]; //array generico, quando usa define tipo
Avalicaoes.push(8.4);
//Avalicaoes.push('8.4');
console.log(Avalicaoes);
function imprimir(args) {
    args.forEach(item => console.log(item));
}
imprimir([1, 2, 3, 4]);
imprimir([3, 4, 5, 6]);
imprimir(['oi', 'tudo  bem']);
imprimir([
    { nome: 'Livia', idade: 20 }
]);
const chEcho = myName;
console.log(chEcho('Entrou'));
//class generics
class OperationBinary {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new OperationBinary('Bom dia', 'Livia').executar());
console.log(new OperationBinary(2, 3).executar());
class OperationBinary2 {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
class SomaBinary extends OperationBinary2 {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinary(3, 4).executar());
class DiferencaDatas extends OperationBinary2 {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const T1 = this.getTime(this.operando1);
        const T2 = this.getTime(this.operando2);
        const diferenca = Math.abs(T1 - T2);
        const dias = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / dias)} dia (s)`;
    }
}
const d1 = new Data(1, 2, 2021);
const d2 = new Data(2, 2, 2021);
console.log(new DiferencaDatas(d1, d2).executar());
//# sourceMappingURL=generics.js.map