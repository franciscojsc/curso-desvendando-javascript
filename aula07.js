//Function

/*
A linguagem JavaScript não tem:
    Classe
    Construtor
    Métodos
    Módulo
    
Uma função é um objeto que contém um bloco de código executável.
Esse bloco é isolado, não sendo possível acessá-lo externamente.

Na linguagem JavaScript, as funções são de primeira classe.
Função de primeira classe é aquela que pode se atribuída a uma variável, passada
como parâmentro ou ser retonada de uma outra função.

*/

//Criando funções

//Function Declaration
function soma(a, b) {
    return a + b;
}

//Function Expression
var soma = function(a, b) {
    return a + b;
};

/*
Named Function Expression
 O nome da função pode ser útil pois aparece no stake trace, lista de breakpoint
 e demais ferramentas de debbuging.
*/

var soma = function soma(a, b) {
    return a + b;
}

//Passando uma função como parâmentro

var produto = {nome: 'Sapato', preco: 150};

var formulaImpostoA = function (preco) {
    return preco * 0.1;
};

var formulaImpostoB = function (preco) {
    return preco * 0.3;
};

var calcularPreco = function (produto, formulaImposto) {
    return produto.preco + formulaImposto(produto.preco);
};

calcularPreco(produto, formulaImpostoA);
calcularPreco(produto, formulaImpostoB);

//Retornando uma função

var helloWorld = function () {
    return function () {
        return "Hello World!";
    };
};


helloWorld();//Function
helloWorld()()//Hello World!

//Invocando uma função por meio de um Objeto

var getIdade = function (extra) {

    //console.log(arguments);

    return this.idade;//this se refere ao scope ao qual está invocando a função
};

var pessoa = {
    nome: "Jõao",
    idade: 20,
    getIdade: getIdade
};

getIdade(2);//undefined - se refere ao escopo global, o escopo global tem idade? senão o retorno será undefined
pessoa.getIdade(2);//22

//Invocando uma função com call e apply

/*
 Call e Apply
 Toda função possui os métodos call() e apply().
 Eles são utilizados para indicar em qual escopo uma função deve ser executada.
 
 A diferença é basicamente a forma como é utilizado:

 função.call(escopo, parametro1, parametro2);
 função.apply(escopo, parametros);
 */

getIdade.call(pessoa, 2);//22
getIdade.apply(pessoa, [2]);//22

//Invocando uma função por meio do operador new

//Funções Construtoras vs. Funções Fábrica

//Funções Fábrica:

var criarPessoa = function (nome, idade) {
    return {
        nome: nome,
        idade: idade
    };
};

console.log(criarPessoa("Pedro", 20));
console.log(criarPessoa("Maria", 30));

//Funções Construtoras:

var Pessoa = function(nome, idade) {
    this.nome = nome;
    this.idade = idade;
};

console.log(new Pessoa("Pedro", 20));
console.log(new Pessoa("Maria", 30));

var pedro = {};
Pessoa.call(pedro, "Pedro", 20);
console.log(pedro);

var maria = {};
Pessoa.call(maria, "Maria", 30);
console.log(maria);