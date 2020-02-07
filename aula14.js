/*
    Herança

    Um objeto é uma coleção dinâmica de chaves e
    valores, que podem ser de qualquer tipo, e um
    protótipo que pode ser um objeto ou null.

    Objetos herdam de outros objetos

    A propriedade __proto__ é uma
    referência para o protótipo do objeto.
*/

var homem = {
    sexo: "masculino"
};

var joao = {
    nome: "João",
    idade: 20,
    __proto__: homem
};

var pedro = {
    nome: "Pedro",
    idade: 18,
    __proto__: homem
};

console.log(joao);
console.log(joao.sexo);
console.log(pedro);
console.log(pedro.sexo);

/*
    __proto__ não é padrão e pode não
    funcionar em alguns interpretadores

    Prefira a utilização de Object.getPrototypeOf e
    Object.setPrototypeOf para interagir com o protótipo do objeto.
*/

var mulher = {
    sexo: "feminino"
};

var josefa = {
    nome: "Josefa",
    idade: 20,
};

Object.setPrototypeOf(josefa, mulher);

var livia = {
    nome: "Livia",
    idade: 18
};

Object.setPrototypeOf(livia, mulher);

console.log(josefa);
console.log(josefa.sexo);
console.log(livia);
console.log(livia.sexo);

/*
    Também é possível utilizar Object.create para
    determinar o protótipo do objeto.
*/

var leila = Object.create(mulher);
leila.nome = "Leila";
leila.idade = 30;

console.log(leila);
console.log(leila.sexo);

/*
    Shadowing

    Se não encontar propriedade no objeto,
    buscar no protótipo
*/


var mateus = {
    nome: "Mateus",
    idade: 58
}

Object.setPrototypeOf(mateus, homem);

console.log(mateus.sexo); // masculino

mateus.sexo = "feminino";

console.log(mateus.sexo); // feminino

delete mateus.sexo;

console.log(mateus.sexo); // masculino

console.log(Object.keys(mateus)); // Mostra as propriedades do objeto

// forin acessar propriedades nos protótipos
for (var property in mateus) {
    console.log(property);
}

for (var property in mateus) {
    if (!mateus.hasOwnProperty(property)) continue;
    console.log(property);
}