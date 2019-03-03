// Cuidado com escopo global
/*
    Como linguagem não possui um ligador, ou linker, faz uso de um escopo global compartilhado para estabelecer os vínculos
    entre diferentes partes de uma aplicação.
*/

var counter = 0;
var add = function () {
    return ++counter;
};
console.log(add());
console.log(add()); 
console.log(add()); 
console.log(add());

var itens = [];
var add= function (item) {
    itens.push(item);
    return itens;
};
console.log(add('A'));
console.log(add('B')); 
console.log(add('C')); 
console.log(add('D'));

// Encapsulamento por meio de Object

var counter = {
    value: 0,
    add: function () {
        return ++this.value;
    }
};
console.log(counter.add());
console.log(counter.add()); 
console.log(counter.add()); 
console.log(counter.add());

var itens = {
    value: [],
    add: function (item) {
        this.value.push(item);
        return this.value;
    }
};
console.log(itens.add('A'));
console.log(itens.add('B')); 
console.log(itens.add('C')); 
console.log(itens.add('D'));

// A linguagem JavaScript não possui modificadores de visibilidade como private ou public

counter.value = undefined;
console.log(itens.add('E'));//NaN

// Encapsulamento por meio de Function

// Funções Fábrica
var createCounter = function () {
    var value = 0;
    return {
        add : function () {
            return ++value;
        }
    };
};

var counter = createCounter();

console.log(counter.value);//private
console.log(counter.add());//public
console.log(counter.add());

//Funções Construtoras

var Counter = function () {
    var value = 0;
    this.add = function () {//quando tiver this é public 
        return ++value;
    };
};

var counter = new Counter();

console.log(counter.value);//private
console.log(counter.add());//public
console.log(counter.add());


/*
    IIFE
    Immediately-Invoked Function Expression
*/

var counter = (function(){
    var value = 0;
    return {
        add: function () {
            return ++value;
        }, 
        reset: function () {
            value = 0;
        }
    };
})();

console.log(counter.value);//private
console.log(counter.add());//public
console.log(counter.add());
counter.reset();
console.log(counter.add());


//Padrão - Reveling Module Pattern
var counter = (function(){
    var _value = 0;//conversão, tudo que for privado colocar o underline na frente
    var _add = function () {
        return ++_value;
    };
    var _reset = function () {
        _value = 0;
    };
    return {
        add: _add, 
        reset: _reset
    };
})();

console.log(counter.value);//private
console.log(counter.add());//public
console.log(counter.add());
counter.reset();
console.log(counter.add());
