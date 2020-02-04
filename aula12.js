/*
    Operadores

    0 == ""
    true
    0 == "0"
    true
    false == undefined
    false
    false == null
    false
    null == undefined
    true
    1 == true
    true
    0 == false
    true
    0 == "\n"
    true
*/

10 == new Number(10); //true


/*
    Se x é Number e y é Object, a comparação será feita da
    seguinte forma: x == ToPrimitive(y), que utiliza a operação
    valueOf, ou toString se não existir valueOf, do Objeto para
    compará-lo com um Number. O retorno da operação
    valueOf nesse casso é 10, sendo assim o retorno é true.
*/

var x = {}
x.valueOf = function () {
    return 10;
}

10 == x; //true

x.toString = function () {
    return 100;
}

10 == x; //true

delete x.valueOf;

10 == x; //false

100 == x; //true

delete x.toString;

100 == x; //false

10 === "10"; //false

// Comparar dois objetos em JavaScript

var x = {};

var y = {};

x == y; // false

x === y; // false

var z = x;

x == z; // true

x === z; // true

// Operadores lógicos OU || e E &&

0 || 2; // 2

1 || 2; // 1

1 && 2; // 2

0 && 2; // 0

if (10) {
    console.log("OK");
}

/*
    Quando avaliados situações boleanas, os tipos
    assumem valores truthy ou falsy por meio da
    operação abstrata ToBoolean
*/

!!0; // false
!!NaN; // false;
!!""; // false
!!false; // false;
!!null; // false;
!!undefined; // false;

// Todos os outros são truthy por padrão, incluindo {} e []

!!{}; // true
!![]; // true

var generateSerial = function (max) {
    max = max || 1000;
    return Math.floor(Math.random() * max);
};

console.log(generateSerial(1000));
console.log(generateSerial());

1 | 2; // 3

/*
    0001 = 1
    0010 = 2
    0011 = 3
*/

1 & 2; // 0

/*
    0001 = 1
    0010 = 2
    0000 = 0
*/

/*
    typeof
    
    Retorna o tipo do operando
*/

typeof 10; // 'number'
typeof "Francisco Chaves"; // 'string'
typeof true; // 'boolean'
typeof undefined; // 'undefined'
typeof null; // 'object'
typeof {}; // 'object'
typeof /abc/; // 'object'
typeof []; // 'object'
typeof new Date(); // 'object'

/*
    new

    Construi um objeto com base em uma função
    construtora
*/

var Pessoa = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;
};

var pedro = new Pessoa("Pedro", 20);

/*
    instanceof

    Verifica se o objeto possui a função construtora
    em sua cadeia de protótipos
*/

pedro instanceof Pessoa; //true
pedro instanceof Date; //false

/*
    in

    Verifica se a propriedade faz parte do objeto
*/

"nome" in pedro; // true
"peso" in pedro; // false

/*
    delete

    Apaga a propriedade de um objeto
*/

delete pedro.idade;
"idade" in pedro; //false

/*
    Operadores de comparação

    <, >, <=, >=
*/

10 > 9; //true
1.1 < 1.2; //true
"a" < "b"; //true
"joão" > "maria"; //false

/*
    Operadores de aritméticos

    +, -, *, / e %
*/

"Ana" + " Maria"; // Ana Maria
10 - 5; //5

/*
    Operadores de atribuição

    +=, -=, *=, /= e %=
*/

var x = 10;

x += 12; // 22

// Operador de incremento e decremento -- e ++

var y = 0;

y++; // 0
y; // 1
++y; // 2
y; // 2

/*
    Operador ternário

    (expressão) ? true: false
*/

var idade = 22;

(idade >= 18) ? "Maior de idade" : "Menor de idade"; // Maior de idade