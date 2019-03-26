//Não existem Arrays de verdade na liguagem JavaScript

/*
    Os Arrays são apenas objetos especiais que oferecem 
    meios para acessar e manipular suas propriedades por 
    meios de índices.
*/

var carros = ['Ka', 'Corsa', 'Palio'];
console.log(carros);

var motos = new Array(10);
console.log(motos);
motos[2] = 'Bros';
console.log(motos);

//Valor do Array
console.log(carros.valueOf());

//Valor em String
console.log(carros.toString());

//Tamanho do Array
console.log(carros.length);

//Inserir elementos no final
carros.push('Gol');
console.log(carros);

//Remover elementos no final
console.log(carros.pop());
console.log(carros);

//Inserir elementos no início
carros.unshift('Gol');
console.log(carros);

//Remover elementos no início
console.log(carros.shift());
console.log(carros);

//Localizando elementos com indexOf
console.log(carros.indexOf('Corsa'));

//Removendo elementos em uma posição
var posicao = carros.indexOf('Corsa');
console.log(carros.splice(posicao, 1));
console.log(carros);

posicao = carros.indexOf('Ka');
console.log(posicao);
console.log(carros.splice(posicao, 0, 'Corsa','Sonic'));
console.log(carros);

//Iterando em um Array com forEach
carros.forEach(function(item , index){
    console.log(item + ' : ' + index);
});

carros = [];
carros[0] = {marca: 'Ford', modelo: 'Ka', preco: 28800};
carros[1] = {marca: 'Chevrolet', modelo: 'Corsa', preco: 34750};
carros[2] = {marca: 'Fiat', modelo: 'Palio', preco: 32000};

//Filtrando o Array
var carrosFord = carros.filter(function(elemento){
    return elemento.marca === 'Ford';
});
console.log(carrosFord);

//Testando os elementos do Array - Se todos corresponder a expressão - true, senão - false
var verificarCarros = carros.every(function(elemento, index){
    return elemento.marca === 'Ford';
});

if(verificarCarros){
    console.log('Todos são Ford');
}

//Testando os elementos do Array - Se existe algum corresponder a expressão - true, senão - false
verificarCarros = carros.some(function(elemento, index){
    return elemento.marca === 'Ford';
});

if(verificarCarros){
    console.log('Existem algum carro Ford');
}

//Mapeando os elementos e retorna um novo Array
var marcas = carros.map(function(elemento){
    return elemento.marca;
});

console.log(marcas);

//Processando os elementos do Array

var total = carros.reduce(function(prev, cur){
    return prev + cur.preco;
}, 0);

console.log(total);

//Concatenando dois Arrays
carros = ['Ka', 'Corsa', 'Palio'];
motos = ['Honda', 'Yamaha'];

var veiculos = carros.concat(motos);
console.log(veiculos.toString());

//Fatiando um Array
carros.push('Gol');
console.log(carros);

console.log(carros.slice(0, 2));
console.log(carros.slice(1, 3));
console.log(carros.slice(2));

//Invertendo o Array
console.log(carros.reverse());

//Ordenando os elementos do Array

carros = [];
carros[0] = {marca: 'Ford', modelo: 'Ka', preco: 28800};
carros[1] = {marca: 'Chevrolet', modelo: 'Corsa', preco: 34750};
carros[2] = {marca: 'Fiat', modelo: 'Palio', preco: 32000};

console.log(carros.sort());

//Ordenado os elementos do Array pelo preço

var carroOrdenadoPreco = [];

carroOrdenadoPreco = carros.sort(function(a, b){
    return a.preco - b.preco;
});
console.log(carroOrdenadoPreco);

carroOrdenadoPreco = carros.sort(function(a, b){
    return b.preco - a.preco;
});
console.log(carroOrdenadoPreco);

//Adicionando separado
carros = ['Ka', 'Corsa', 'Palio'];

console.log(carros.join(' - '));

//Multiplicação de string JavaScript * 10
console.log(new Array(10).join("JavaScript;").split(';'));