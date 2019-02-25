//Boolean

//Criando um Boolean
var isento = true;
var estudante = false;

isento.toString(); //"true"
estudante.valueOf(); //false

//Valores truthy e falsy

console.log(!!0);
console.log(!!NaN);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);

var pessoa = {};
console.log(!!pessoa); //true

var carros = [];
console.log(!!carros);