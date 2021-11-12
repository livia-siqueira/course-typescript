"use strict";
let func = {
    supervisores: ['Supervisor1', 'Supervisor2', 'Supervisor3', 'Supervisor4'],
    baterPonto(hora) {
        return (hora <= 8) ? 'Ponto normal' : 'Fora do horário';
    }
};
let func2 = {
    supervisores: ['Livia'],
    baterPonto(hora) {
        return (hora <= 8) ? 'Ponto normal' : 'Fora do horário';
    }
};
console.log(func.supervisores);
console.log(func.baterPonto(8));
console.log(func.baterPonto(20));
//# sourceMappingURL=desafio.js.map