class Conta {
    numero: string;
    saldo: number;

    constructor(numero: string, saldo: number=0) {
        this.saldo = saldo;
        this.numero = numero;
    }

    debitar(valor: number): void{
        if (this.saldo >= valor){
            this.saldo -= valor;
        }
    }

    creditar(valor: number): void{
        this.saldo += valor;
    }

    transferir(destino: Conta, valor: number): void{
        this.debitar(valor);
        destino.creditar(valor);
    }

}
