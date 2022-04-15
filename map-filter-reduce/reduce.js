var numeros = [2, 3, 4, 5]; // array
var soma = numeros.reduce(function(soma, num) {
  return soma + num;
});

console.log(numeros);
console.log(soma);

// funtion
var nums = [2, 4, 6, 8]; // array
function somaNumeros(array) {
  return array.reduce(function(somaNumeros, num) {
    return somaNumeros + num;
  });
}

console.log(nums);
console.log(somaNumeros(nums));