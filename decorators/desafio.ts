// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: false
}
 
@perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!')
    }
}

function perfilAdmin<T extends Constructor>(constructor: T){
    return class extends constructor{
        constructor(...args: any[]){
            super(...args)
            if(!usuarioLogado || usuarioLogado.admin === false){
                throw new Error('Sem permissão');
            }
        }
    }
}
 
new MudancaAdministrativa().critico()