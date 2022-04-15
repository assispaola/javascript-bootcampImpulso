class contaBancaria {
  constructor(agencia, numero, tipo) {  // método construtor da classe
    // declaração dos atributos das propriedades
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0; // colocar _saldo (underline) p/ que a função get e set tenha o nome saldo,sendo diferente do nome da propriedade ou usar nome diferente no get/set
  }

  // get - faz a leitura da propriedade saldo
  get saldo() {
    return this._saldo;
  }

  // set - atribui um valor a propriedade saldo
  set saldo(value) {
    this._saldo = value;
  }

  // método sacar
  sacar(value) {
    if (value > this._saldo) {  // condição que verifica se possui saldo suficiente p/ operação
      return "Operação negada"
    }
    this._saldo = this._saldo - value;  // operação de saldo - valor de saque

    return this._saldo;  // retorna saldo atual após operação realizada
  }

  // método depositar
  depositar(value) {
    this._saldo = this._saldo + value;  // operação de saldo - valor de depósito

    return this._saldo;  // retorna saldo atual após operação realizada
  }
}


class contaCorrente extends contaBancaria {   // Classe herdando da classe mãe (contaBancaria)
  constructor(agencia, numero, cartaoCredito) {   // Chamada do construtor da classe mãe (contaBancaria)     instanciei propriedade tipo e adicionei nova propriedade cartaoCredito
    super(agencia, numero);   // o super é uma representação do construtor da classe mãe
    // declaração dos atributos das propriedades
    this.tipo = "corrente";
    this._cartaoCredito = cartaoCredito;
  }

  // get
  get cartaoCredito() {
    return this._cartaoCredito;
  }

  // set
  set cartaoCredito(value) {
    this._cartaoCredito = value;
  }
}


class contaPoupanca extends contaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "poupança";
  }
}

class contaUniversitaria extends contaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "universitária";
  }

  // método saque
  sacar(value) {
    if (value > 500) {
      return "Não permitido saques acima de R$500,00"
    }
    this._saldo = this._saldo - value;

    return this._saldo;
  }
}

