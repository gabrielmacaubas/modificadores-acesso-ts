class PessoaFisica extends Pessoa {
    private _cpf: string;

    constructor(nome: string, idade: number, dataNascimento: Date, cpf: string) {
        super(nome+"- Física", idade, dataNascimento);
        this._cpf = cpf;
    }

    get cpf(): string {
        return this._cpf;
    }

    alterarNome(nomeNovo: string) {
        this.nome = nomeNovo + "- Física";
    }
}