class ContaBanco {
  constructor(saldo) {
    this.saldo = saldo;
  }
  deposito(valor) {
    this.saldo += valor;
  }
  saque(valor) {
    this.saldo -= valor;
  }
}

let conta = new ContaBanco(100);

conta.deposito(100);
console.log(conta.saldo);
console.log(conta);
console.log(conta.saldo);
