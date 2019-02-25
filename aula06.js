//Object
//Um objeto é uma coleção dinâmica de chaves e valores de qualquer tipo de dado.

//criando um objeto
var pessoa = {};

typeof pessoa; //object

var pessoa = {
    nome: 'João',
    idade: 20,
    telefone: null,
    endereco: {
        logradouro: 'Av.Brasil',
        numero: 70,
        bairro: 'centro'
    }
};

pessoa.telefone = '99999-9999';
pessoa['cor dos olhos'] = "azul";

console.log(pessoa);

//Apagando propriedade de um objeto
delete pessoa.telefone

console.log(pessoa);
