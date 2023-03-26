class ContaController {
    repositorioContas: RepositorioContas;

    constructor() {
        this.repositorioContas = new RepositorioContas();
    }

    adicionarConta(conta: Conta): void {
        this.repositorioContas.adicionar(conta);
    }

    listar(): void {
        this.repositorioContas.getContas().forEach(conta =>
            this.inserirContaNoHTML(conta)
        );
    }

    inserir(evento: Event): void {
        evento.preventDefault();
        const elementoNumero: HTMLInputElement = document.querySelector('#numero');
        const elementoSaldo: HTMLInputElement = document.querySelector('#saldo');

        const conta: Conta = new Conta(elementoNumero.value, 
            Number(elementoSaldo.value));
        this.repositorioContas.adicionar(conta);
        this.inserirContaNoHTML(conta);
    }

    inserirContaNoHTML(conta: Conta): void {
        const elementoP: HTMLParagraphElement = document.createElement('p');
        elementoP.textContent = 'Conta ' + conta.numero + ': ' + conta.saldo;
        const botaoApagar: HTMLButtonElement = document.createElement('button');
        botaoApagar.textContent = 'X';

        botaoApagar.addEventListener('click', (event) => {
            this.repositorioContas.remover(conta.numero);
            (<HTMLButtonElement>event.target).parentElement.remove();
        });

        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
