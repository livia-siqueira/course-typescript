let canal: string = 'Gaveta';

let inscritos: number = 61089;

//canal = inscritos;

console.log(canal)

//noImplicitAny --> typescript checa se o tipo any ira dar problema ou não (sempre true)
function soma(a: any,b:any) //gera problema ficar com o any implicito 
{
    return a+b;
}

let anyThing; // aqui não gera problema
anyThing = 12;
anyThing = 'Livia';


//"strictNullChecks" --> checa retorno de valores nulos indesejados
function saudar(isManha: boolean){
    let saudacao: string
    if(isManha) return saudacao = 'Bom dia';
    return 'Boa vida';
}
console.log(saudar(false));

//"noUnusedLocals" e "noUnusedParameters" --> nao permite, por padrão (true) variaveis e valores não sejam usadas.
//outDir --> define onde ficarão (pasta e caminho) os arquivos compilados /build
//outFile --> unico arquivo de saida /build/app.js