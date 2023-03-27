class Pessoa {
    protected _nome: string;
    private _idade: number;
    private _dataNascimento: Date;

    constructor(nome: string, idade: number, dataNascimento: Date) {
        this._nome = nome;
        this._idade = idade;
        this._dataNascimento = dataNascimento;
    }

    get nome(): string {
        return this._nome;
    }

    get idade(): number {
        return this._idade;
    }

    get dataNascimento(): Date {
        return this._dataNascimento;
    }

    set nome(nomeNovo: string) {

        this._nome = nomeNovo;
    }

    set idade(idadeNovo: number) {
        this._idade = idadeNovo;
    }

    set dataNascimento(dataNascimentoNovo: Date) {
        this._dataNascimento = dataNascimentoNovo;
    }
}
