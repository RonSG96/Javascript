/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
//hola, soy un comentario
// 2. Escribe un comentario en varias líneas
`Hola soy un comentario 
     en varias lineas`;
// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let string = 'hola';
let number = 5;
let boolean = true;
let undefinedVar = undefined;
let nullVar = null;
let symbol = Symbol('foo');
let bigInt = 9007199254740991n;
// 4. Imprime por consola el valor de todas las variables
console.log(string);
console.log(number);
console.log(boolean);
console.log(undefinedVar);
console.log(nullVar);
console.log(symbol);
console.log(bigInt);

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof string);
console.log(typeof number);
console.log(typeof boolean);
console.log(typeof undefinedVar);
console.log(typeof nullVar);
console.log(typeof symbol);
console.log(typeof bigInt);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
string = 'adios';
number = 10;
boolean = false;
undefinedVar = undefined;
nullVar = null;
symbol = Symbol('bar');
bigInt = 9007199254740991n;

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
string = 5;
number = 'hola';
boolean = 10;
undefinedVar = 'adios';
nullVar = 10;
symbol = 'bar';
bigInt = 9007199254740991n;

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const stringConst = 'hola';
const numberConst = 5;
const booleanConst = true;

// 9. A continuación, modifica los valores de las constantes
// stringConst = 'adios';
// numberConst = 10;
// booleanConst = false;

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
