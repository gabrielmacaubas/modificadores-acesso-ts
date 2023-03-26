class ContaBonificada extends Conta {
    numero: string;
    saldo: number;

    constructor(numero: string, saldo: number) {
        super(numero, saldo);
    }

    creditar(valor: number): void {
        super.creditar(valor * 1.1);
    }

}
