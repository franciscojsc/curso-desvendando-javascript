/*
    As expressões regulares são estruturas
    formadas por uma sequência de caracteres
    que especificam um padrão formal

    Útil para:
    - Validação de campos
    - Extração de dados
    - Subtituição de caracteres em textos

    Exemplo de expressão regular:

    var regExp = /<expressão regular>/;
    var regExp = new RegExp("<expressão reguar>");

    RegExp API

    exec - Executa a RegExp, retornando os detalhes
    test - Testa a RegExp, retornando true ou false 

*/

var regExp1 = /9999-9999/;
var telefone1 = "9999-9999";
console.log(regExp1.exec(telefone1));
console.log(regExp1.test(telefone1));

/*
    Escapnado caracteres especiais

    \- A barra é utilizada antes de
    caracteres especiais, com o objetivo de
    escapá-los.
*/

var regExp2 = /\(49\) 9999-9999/;
var telefone2 = "(49) 9999-9999";
console.log(regExp2.exec(telefone2));
console.log(regExp2.test(telefone2));

/*
    Iniciando e finalizando com um determinado caractere

    ^ - Inicia com um determinado caractere
    $ - Finaliza com um determinado caractere
*/

var regExp3 = /^\(48\) 9999-9999$/;
var telefone3 = "(48) 9999-9999";
console.log(regExp3.exec(telefone3));
console.log(regExp3.test(telefone3));

/*
    Grupos de caracteres

    [abc] - Aceita qualquer caractere
    dentro do grupo, nesse caso a, b e c
    [^abc] - Não aceita qualquer caractere
    dentro do grupo, nesse casso a, b ec
    [0-9] - Aceita qualquer caractere 
    entre 0 e 9
    [^0-9] - Não aceita qualquer caractere 
    entre 0 e 9
*/

var regExp4 = /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;
var telefone4 = "(80) 9876-1234";
console.log(regExp4.exec(telefone4));
console.log(regExp4.test(telefone4));

/*
    Quantificadores

    Os quantificadores podem ser aplicados a caracteres,
    grupos, conjuntos ou metacaracteres.

    {n} - Quantifica um número específico
    {n,} - Quantifica um número mínimo
    {n,m} - Quantifica um número mínimo e um número máximo

    ? - Zero ou um
    * - Zero ou mais
    + - Um ou mais
*/

var regExp5 = /^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$/;
var telefone5 = "(80) 9876-1234";
console.log(regExp5.exec(telefone5));
console.log(regExp5.test(telefone5));

var regExp6 = /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/;
var telefone6 = "(80) 99876-1234";
console.log(regExp6.exec(telefone6));
console.log(regExp6.test(telefone6));

var regExp7 = /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}$/;
var telefone7 = "(80) 98761234";
console.log(regExp7.exec(telefone7));
console.log(regExp7.test(telefone7));

var regExp8 = /<table><tr>(<td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td>)+<\/tr><\/table>/;
var telefone8 = "<table><tr><td>(80) 9876-1234</td><td>(70) 97771234</td><td>(60) 99876-4321</td></tr></table>";
console.log(regExp8.exec(telefone8));
console.log(regExp8.test(telefone8));

/*
    Metacaracteres

    . - Representa qualquer caracte
    \w - Representa o conjunto [a-zA-Z0-9_]
    \W - Representa o conjunto [^a-zA-Z0-9_]
    \d - Representa o conjunto [0-9]
    \D - Representa o conjunto [^0-9]
    \s - Representa um espaço em branco
    \S - Representa um não espaço em branco
    \n - Representa uma quebra de linha
    \t - Representa um tab
*/

var regExp9 = /<table><tr>(<td>\(\d{2}\)\s\d{4,5}-?\d{4}<\/td>)+<\/tr><\/table>/;
var telefone9 = "<table><tr><td>(80) 9876-1234</td><td>(70) 97771234</td><td>(60) 99876-4321</td></tr></table>";
console.log(regExp9.exec(telefone9));
console.log(regExp9.test(telefone9));

/*
    String API

    match - Executa uma busca na String e retorna
    um array contendo os dados encontrados, ou null.
    split - Divide a String com base em uma outra
    String fixa ou expressão regular.
    replace - Substitui partes da String com base
    em outra String fixa ou expressão regular.
*/

var regExp10 = /\(\d{2}\)\s\d{4,5}-?\d{4}/;
var telefone10 = "<table><tr><td>(80) 9876-1234</td><td>(70) 97771234</td><td>(60) 99876-4321</td></tr></table>";
console.log(telefone10.match(regExp10));

/*
    Modificadores

    i - Case-insensitive matching
    g - Global matching
    m - Multiline matching
*/

var regExp11 = /\(\d{2}\)\s\d{4,5}-?\d{4}/g;
var telefone11 = "<table><tr><td>(80) 9876-1234</td><td>(70) 97771234</td><td>(60) 99876-4321</td></tr></table>";
console.log(telefone11.match(regExp11));

var regExp12 = /\(\d{2}\)\s\d{4,5}-?\d{4}/g;
var telefone12 = "<table><tr><td>(80) 9876-1234</td><td>(70) 97771234</td><td>(60) 99876-4321</td></tr></table>";
console.log(telefone12.replace(regExp12, "telefone"));