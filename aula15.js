/*
    Herança
*/

// Criando objetos diretamentes

var joao = {
    nome: "João",
    idade: 20,
    sexo: "masculino"
}

var pedro = {
    nome: "Pedro",
    idade: 18,
    sexo: "masculino"
}

// Criando objetos com uma função fábrica

var criarHomem = function (nome, idade) {
    return {
        nome: nome,
        idade: idade,
        sexo: "masculino"
    };
};

var rafael = criarHomem("Rafael", 22);
var francisco = criarHomem("Francisco", 27);

/*
    O operador new cria um novo objeto por meio de
    uma função construtora
*/

var Homem = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = "masculino";
};

var rodrigo = new Homem("Rodrigo", 30);
var willian = new Homem("Willian", 25);

console.log(rodrigo); // { nome: 'Rodrigo', idade: 30, sexo: 'masculino' }
console.log(willian); // { nome: 'Willian', idade: 25, sexo: 'masculino' }

var junio = {};
Homem.call(junio, "Junio", 23);

// var Homem = function (nome, idade) {
//     junio.nome = nome;
//     junio.idade = idade;
//     junio.sexo = "masculino";
// };

var kael = {};
Homem.apply(kael, ["Pedro", 24]);

// var Homem = function (nome, idade) {
//     kael.nome = nome;
//     kael.idade = idade;
//     kael.sexo = "masculino";
// };

// Toda função tem uma propriedade chamada prototype
var x = function () {};
x.prototype; // {}

var Mulher = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Mulher.prototype.sexo = "feminino";

var maria = new Mulher("Maria", 18);

console.log(maria); // { nome: 'Maria', idade: 18 }
console.log(maria.sexo); // feminino

var josefa = {};
josefa.__proto__ = Mulher.prototype;
Mulher.apply(josefa, ["Joseja", 32]);

console.log(josefa); // { nome: 'Josefa', idade: 32 }
console.log(josefa.sexo); // feminino

Mulher.prototype.sexo = "masculino";

console.log(maria.sexo); // masculino
console.log(josefa.sexo); // masculino

Mulher.prototype.sexo = "feminino";

// Exemplo de como o new funcionar internamente
var _new = function (f) {
    var obj = {};
    obj.__proto__ = f.prototype;
    f.apply(obj, Array.prototype.slice.call(arguments, 1));
    return obj;
}

var manuela = _new(Mulher, "Manuela", 25);

console.log(manuela);
console.log(manuela.sexo);