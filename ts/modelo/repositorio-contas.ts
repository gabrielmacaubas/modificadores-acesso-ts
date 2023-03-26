class RepositorioContas {
    contas: Conta[]

    constructor() {
        this.contas = new Array();
    }

    adicionar(conta: Conta): void {
        this.contas.push(conta);
    }

    pesquisar(numero: string): Conta {
        return this.contas.find(conta => conta.numero === numero);
    }

    getContas(): Conta[]{
        return this.contas;
    }

    remover(numero: string): void {
        const contaARemover: Conta = this.pesquisar(numero);
        if (contaARemover) {
            const indiceARemover: number = this.contas.indexOf(contaARemover);
            if (indiceARemover > -1) {
                this.contas.splice(indiceARemover, 1);
            }
        }
    }
}
