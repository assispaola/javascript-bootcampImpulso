// Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

// 1- Crie uma função getAdmins que recebe um Map;
// 2- Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
// 3- entro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usu;arios que são administradores.


// criando a função
function getAdmins(map) {
    let admins = [];  // array
    for ([key, value] of map) { // iterando
        if (value == 'Admin') {
            admins.push(key);
        }
    }   
    return admins;
}

// criando map
const usuarios = new Map();

usuarios.set('Luiz', 'User');
usuarios.set('Bruno', 'Admin');
usuarios.set('Paola', 'Admin');
usuarios.set('Sonia', 'Admin');

// mostrar apenas usuários admins
console.log(getAdmins(usuarios));