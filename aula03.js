//String - são imutáveis - podem ser declaradas com aspas simples ou duplas

//Criando uma String

var nome = "AgileCode";

nome.charAt(2); //"i"
nome.charCodeAt(0); //65
nome.concat("!"); //"AgileCode!"
nome.indexOf('e'); //4
nome.replace('Code', '!'); //"Agile!"
nome.split('e'); //['Agil', 'Cod', ''];
nome.substring(0,5);//Agile
nome.substring(5);//'Code'
nome.trim();//'AgileCode'
nome.toLowerCase();//'agilecode'
nome.toUpperCase();//'AGILECODE'
nome.length;//9
