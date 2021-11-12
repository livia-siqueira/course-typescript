"use strict";
// let e const
let seraquePode = "?";
console.log(seraquePode);
//var seraquePode = 'uhu'; //undefined porque o var "joga" a definição da var primeiro (var seraquepode)
//let seraquePode ='uhu'; //erro pois let nao tem esse comportamento
let estaFrio = true;
if (estaFrio) {
    //var acao = 'Coloque o casaco'; //acesso essa var fora do if, porque ela tem escopo ou global ou de função
    let acao = "coloque o casaco"; //- erro porque let também tem escopo de bloco
    console.log(acao);
}
//Parâmetro padrão
function contagemRegressiva(inicio = 5, fim = inicio - 5) {
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim!");
}
contagemRegressiva();
contagemRegressiva(3);
//rest and spread
const numbers = [1, 2, 3, 4, 5, 6];
function addArray(...args) {
    //pega todos os argumentos desestruturados
    return { args };
}
const newNumbers = [-1, 0, ...numbers];
console.log(addArray(...numbers)); //une/add todos os argumentos combinados
console.log(newNumbers);
//this
// this
// function normalComThis() {
//     console.log(this)
// }
// normalComThis()
// const normalComThisEspecial = normalComThis
//     .bind({ nome: 'Ana' })
// normalComThisEspecial()
// // this???
// console.log(this)
// const arrowComThis = () => console.log(this)
// arrowComThis()
// const arrowComThisEspecial = arrowComThis
//     .bind({ nome: 'Ana' })
// arrowComThisEspecial()
//desestructing and template string
const pessoa = {
    nome: "Livia",
    idade: 20,
    sobrenome: "Siqueira",
};
const caractetisticas = {
    peso: 54,
    hobbies: ["ler", "escutar musica", "correr"],
};
const { peso, hobbies } = caractetisticas;
console.log(`Seu peso: ${peso}, \nSeu hobbie: ${hobbies[0]}`);
console.log(`${caractetisticas.hobbies[1]}`);
const { sobrenome, nome: n } = pessoa;
console.log(`Nome completo: ${n} ${sobrenome}`);
const objPessoa = [30, "Livia"];
const [num1, na1] = objPessoa;
console.log(`Pessoa: ${na1}, \nNumero: ${num1}`);
/*
//callback - depois de um tempo - assincronos
function esperar3(callback: (dado: string) => void) {
  setTimeout(() => {
    callback("3segundos depois");
  }, 3000);
}

esperar3(function (resultado: string) {
  console.log(resultado);
});

function esperar3Promise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("3segundos depois promise");
    }, 3000);
  });
}

esperar3Promise().then((dado) => console.log(dado));

fetch("https://swapi.dev/api/people/1").then((res) =>
  res
    .json()
    .then((dados) => dados.films)
    .then((films) => fetch(films[0]))
    .then((resFilme) => resFilme.json())
    .then(film => console.log(film))
);*/
//# sourceMappingURL=ecmascript.js.map