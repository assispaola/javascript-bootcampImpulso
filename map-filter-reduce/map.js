var numeros = [2, 3, 4, 5]; // array
var dobro = numeros.map(function(num) {
  return num * 2;
});

console.log(numeros);
console.log(dobro);

// function
var nums = [3, 6, 9, 12]; // array
function lista(array) {
  return array.map(function(num) {
    return num * 2;
  });
}

console.log(nums);
console.log(lista(nums));
