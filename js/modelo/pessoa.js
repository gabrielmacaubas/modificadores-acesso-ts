class Pessoa {
    constructor(nome, idade, dataNascimento) {
        this._nome = nome;
        this._idade = idade;
        this._dataNascimento = dataNascimento;
    }
    get nome() {
        return this._nome;
    }
    get idade() {
        return this._idade;
    }
    get dataNascimento() {
        return this._dataNascimento;
    }
    set nome(nomeNovo) {
        this._nome = nomeNovo;
    }
    set idade(idadeNovo) {
        this._idade = idadeNovo;
    }
    set dataNascimento(dataNascimentoNovo) {
        this._dataNascimento = dataNascimentoNovo;
    }
}
