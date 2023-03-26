class PessoaJuridica extends Pessoa {
    constructor(nome, idade, dataNascimento, cnpj) {
        super(nome + "- Jurídica", idade, dataNascimento);
        this._cnpj = cnpj;
    }
    get cnpj() {
        return this._cnpj;
    }
    alterarNome(nomeNovo) {
        this.nome = nomeNovo + "- Jurídica";
    }
}
