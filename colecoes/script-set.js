// Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.

// array
const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

// criando função
function valoresUnicos(array) {
    const mySet = new Set(array);

    return [...mySet];  // usado operador spread 
}

console.log(valoresUnicos(meuArray));