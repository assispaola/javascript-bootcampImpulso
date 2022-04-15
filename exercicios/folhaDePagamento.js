/*
Precisamos saber quanto uma determinada empresa deve pagar para seus colaboradores, porém temos apenas a quantidade de horas trabalhadas e o valor hora. Escreva um programa que leia o número de um colaborador, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse colaborador. Em seguida, apresente o número e o salário do colaborador, com duas casas decimais.
*/

let Idfuncionario = parseInt(gets(25));
let horasTrabalhadas = parseInt(gets(100));
let valorHoraTrabalhada = parseFloat(gets(5.50));
let salario = parseFloat(horasTrabalhadas * valorHoraTrabalhada).toFixed(2); // valor flutuante com 2 casas decimais

console.log("NÚMERO = " + Idfuncionario);
console.log("SALÁRIO = U$ " + salario);

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados.

