// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()

class Mapa<N, S> {
  private itens: Array<{ chave: N; valor: S }>;

  constructor(...args: { chave: N; valor: S }[]) {
    this.itens = args;
  }

  obter(chave: N): { chave: N; valor: S } | null {
   const hasItem = this.itens.filter(i=>i.chave===chave);
   return hasItem ? hasItem[0] : null
  }

  colocar(itemPar: { chave: N; valor: S }) {
    const item = this.obter(itemPar.chave);
    if (item) {
      item.valor = itemPar.valor;
    }
    return item ? item : this.itens.push(itemPar);
  }
  imprimir() {
    console.log(this.itens);
  }

  limpar() {
    this.itens = new Array<{ chave: N; valor: S }>();
  }
}

const mapa = new Mapa<number, string>();
mapa.colocar({ chave: 1, valor: "Pedro" });
mapa.colocar({ chave: 2, valor: "Rebeca" });
mapa.colocar({ chave: 3, valor: "Maria" });
mapa.colocar({ chave: 1, valor: "Gustavo" }); //substituiu Pedro
mapa.colocar({chave: 2, valor:'Livia'}); //substituiu rebeca
mapa.imprimir();
mapa.limpar();
mapa.colocar({chave: 2, valor: 'Test' })
mapa.imprimir();
