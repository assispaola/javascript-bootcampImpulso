// array
const lista = [{
    nome: 'blush',
    preco: 30
  },

  {
    nome: 'corretivo',
    preco: 45
  },

  {
    nome: 'base',
    preco: 80
  },

  {
    nome: 'rímel',
    preco: 56
  }
];


const saldoDisponivel = 200;

function calculaSaldo(saldoDisponivel, lista) {
  return lista.reduce(function (prev, current, index) {
    console.log('rodada ', index + 1);
    console.log((prev));
    console.log((current));
    return prev - current.preco;
  }, saldoDisponivel);
}


console.log(calculaSaldo(saldoDisponivel, lista));