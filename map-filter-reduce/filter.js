var numeros = [1, 2, 3, 4, 5, 6]; // array
var pares = numeros.filter(function(num) {
  return num % 2 == 0;
});

console.log(numeros);
console.log(pares);


// function
var nums = [7, 8, 9, 10, 11, 12]; // array
function numerosPares(array) {
  return array.filter(function(num) {
    return num % 2 == 0;
  });
}

console.log(nums);
console.log(numerosPares(nums));