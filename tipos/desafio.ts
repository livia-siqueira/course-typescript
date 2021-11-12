
//Alias
type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
} 

let func: Funcionario = {
    supervisores: ['Supervisor1', 'Supervisor2', 'Supervisor3', 'Supervisor4'],
    baterPonto(hora: number): string {
        return (hora <=8) ? 'Ponto normal' : 'Fora do horário'
    }
}

let func2: Funcionario = {
    supervisores: ['Livia'],
    baterPonto(hora: number): string {
        return (hora <=8) ? 'Ponto normal' : 'Fora do horário'
    }
}

console.log(func.supervisores);
console.log(func.baterPonto(8));
console.log(func.baterPonto(20));

