"use strict";
let canal = "Gaveta";
let inscritos = 61089;
//canal = inscritos;
console.log(canal);
//noImplicitAny --> typescript checa se o tipo any ira dar problema ou não (sempre true)
function soma(a, b) {
    //gera problema ficar com o any implicito
    return a + b;
}
let anyThing; // aqui não gera problema
anyThing = 12;
anyThing = "Livia";
//"strictNullChecks" --> checa retorno de valores nulos indesejados
function saudar(isManha) {
    let saudacao;
    if (isManha) {
        saudacao = "Bom dia";
    }
    else {
        saudacao = "Boa vida";
    }
    return saudacao;
}
console.log(saudar(false));
//"noUnusedLocals" e "noUnusedParameters" --> nao permite, por padrão (true) variaveis e valores não sejam usadas.
//outDir --> define onde ficarão (pasta e caminho) os arquivos compilados /build
//outFile --> unico arquivo de saida /build/app.js
//# sourceMappingURL=compilador.js.map