/*
    Date

    É representada pela quantidade de
    milissegundos desde o início da Era Unix

    A Era Unix (Unix Epoch), ou Posix Time,
    teve início no dia 1 d janeiro de 1970 às
    00:00:00 do Tempo Universal Coordenado,
    mais conhecido como UTC, referência a
    partir de onde se calculam os fusos horários
    do mundo inteiro.

    O cálculo é feito a partir de UTC
    +/- 00:00, também conhecido como
    Z, abreviação de Zuli Time
*/

// Existem 4 maneiras diferentes de criar uma data

var hoje = new Date();
hoje.getTime();

var natal = new Date(1419465600000);

var milissegundos = Date.parse("2014/12/25");
new Date(milissegundos);

/*
    Os formatos oficialmente
    aceitos são RFC 2822 ou ISO 8601
*/

// RFC 2822
new Date("Thu Dec 25 2014");
new Date("Thu Dec 25 2014 10:30:00");

// ISO 8601
new Date("2014-12-25");
new Date("2014-12-25T10:30:00Z");
new Date("2014-12-25T10:30:00-02:00");

// Os meses são contados a partir de 0
new Date(2014, 11, 25);
new Date(2014, 11, 25, 10, 30, 0);

/*
    Date API

    getDate - Retorna o dia
    getDay - Retorna o ida da semana
    getFullYear - Retorna o ano
    getHours - Retorna as horas
    getMilliseconds - Retorna os milisegundos
    getMinutes - Retorna os minutos
    getMonth - Retorna o mês
    getSeconds - Retorna os segundos
    getTime - Retorna o tempo em milisegundos
    toString - Retorna a data em String
*/