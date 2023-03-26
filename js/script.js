const c1 = new Conta('1', 100);
const c2 = new Conta('2');
const contaController = new ContaController();
contaController.adicionarConta(c1);
contaController.adicionarConta(c2);
contaController.listar();
const contaBonificada = new ContaBonificada('10', 100);
contaBonificada.creditar(10);
console.log(contaBonificada.saldo);
const p = new Pessoa("João", 18, new Date("18 december, 2005"));
const pf = new PessoaFisica("Gabriel", 29, new Date("12 december, 1993"), "123.456.789-00");
const pj = new PessoaJuridica("Eduarda", 30, new Date("13 december, 1992"), "98.765.432/1000-30");
console.log("-----------------Pessoa-----------------");
console.log("Nome: " + p.nome);
console.log("Idade: " + p.idade);
console.log("Data de Nascimento: " + p.dataNascimento);
console.log("--------------Pessoa Física-------------");
console.log("Nome: " + pf.nome);
console.log("Idade: " + pf.idade);
console.log("Data de Nascimento: " + pf.dataNascimento);
console.log("CPF: " + pf.cpf);
console.log("-------------Pessoa jurídica------------");
console.log("Nome: " + pj.nome);
console.log("Idade: " + pj.idade);
console.log("Data de Nascimento: " + pj.dataNascimento);
console.log("CNPJ: " + pj.cnpj);
// const repContas = new RepositorioContas();
//
// const c1 = new Conta('1', 100);
// const c2 = new Conta('2');
//
// repContas.adicionar(c1);
// repContas.adicionar(c2);
//
// repContas.getContas().forEach(conta => console.log(conta.numero))
// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c1.saldo = 200;
//
// c1.debitar(50);
// c2.creditar(1000);
// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c2.transferir(c1, 500);
// console.log(c1.saldo)
// console.log(c2.saldo)
