/* 
Você está na feira com a sua sacola e parou em uma banca.  O feirante lhe entregou pimentões amarelos e vermelhos.  Agora iremos somar os pimetões amarelos e vermelhos para descobrir o total de pimentões na sacola. Você receberá 2 inteiros que devem ser lidos e armazenados nas variáveis A (pimentões amarelos)  e B (pimentões vermelhos). Faça a soma de A e B atribuindo o seu resultado na variável X  (total de pimentões). Apresente X como descrito na mensagem de exemplo abaixo. 
Não apresente outra mensagem além da mensagem especificada.
*/

  let line = gets().split(" "); // split vazio para receber valor
  let A = parseInt(line[0]);
  let B = parseInt(line[1]);
  let total = A + B; // operação
  
  console.log("X = " + total);

  // a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados.