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
