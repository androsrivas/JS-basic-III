// NÚMEROS
// 1. Suma
function sum(value1, value2) {
    console.log(value1 + value2);
}
sum(2, 4);

// 2. Resta
function substraction (value1, value2) {
    console.log(value1 - value2);
}
substraction(4, 6);

// 3. Producto
function multiplication (value1, value2) {
    console.log(value1 * value2);
}
multiplication(4, 6);

// 4. División
function division (value1, value2) {
    console.log(value1 / value2);
}
division(14857, 24);

// 5. Potencia
function exponentiation (base, exponent) {
    console.log(base ** exponent);
}
exponentiation(8, 4);

// 6. Resto división
function remainder (value1, value2) {
    console.log(value1 % value2);
}
remainder(5, 2);

// 7. Raíz cuadrada
function squareRoot (value) {
    console.log(Math.sqrt(value));
}
squareRoot(4)

// 8. Valor absoluto
function absoluteValue (value) {
    console.log(Math.abs(value));
}
absoluteValue(-9);

// 9. Redondear decimales
function roundDecimals (value) {
    console.log(Math.round(value));
}
roundDecimals(6.598340);

// 10. Número aleatorio
function randomNumber () {
    console.log(Math.random(0, 1));
}
randomNumber();


// LETRAS
// 1. Concatenación
function concatText (string1, string2) {
    console.log(string1.concat(string2));
}
concatText("Hola, ", "me llamo Deimos.");

// 2. Longitud de texto
function stringLength (string) {
    console.log(string.length);
}
stringLength("Hola, me llamo Deimos.");

// 3. Mayúsculas
function uppercaseLetter(string) {
    console.log(string.toUpperCase());
}
uppercaseLetter("deimos");

// 4. Minúscula
function lowercaseLetter  (string) {
    console.log(string.toLowerCase());
}
lowercaseLetter("Deimos");

// 5. Devolver caractre según posición
function returnCharByIndex (string, index) {
    console.log(string[index]);
}

returnCharByIndex("Hola, me llamo Deimos.", 15);

// 6. Inversión de texto
function reverseString (string) {
    console.log(string.split("").reverse().join(""));
}
reverseString("Deimos");

// 7. Número de veces de un caracter
function numberOfChar (string, char) {
    console.log(string.split(char).length - 1);
}
numberOfChar("Phobos y Deimos", "o");
numberOfChar("Phobos y Deimos", "s");

// 8. Sin espacios en blanco
function noBlankSpaces (string) {
    console.log(string.split(" ").join(""));
}
noBlankSpaces("Phobos y Deimos");

// 9. To palíndromo or not to
function palindromeOrNot (string) {
    let re = /[^A-Za-z0-9]/g;
    let lowerString = string.toLowerCase().replace(re, "");
    let reverseString = lowerString.split("").reverse().join("");
    return reverseString === lowerString;   
}
console.log(palindromeOrNot("Anita lava la tina"));
console.log(palindromeOrNot("Hola mundo"));
console.log(palindromeOrNot("Dabale arroz a la zorra el abad"));



// ARRAYS
// 1. Suma de elementos en array
function sumElements (array) {
    let sum = 0;
    array.forEach( num => {
        sum += num;
    })
    return sum;
}
let array = [8, 17, 3, 49, 95]
console.log(sumElements(array));

// 2. Promedio de elementos en array
function averageElements (array) {
    let avg = sumElements(array) / array.length;
    return avg; 
}
console.log(averageElements(array));

// 3. ELementos ordenados ascendente
function ascOrder (array) {
    return array.sort((a, b) => a - b);
}
let numbers = [43, 7, 43794, 918, 3, 93];
console.log(ascOrder(numbers));

// Elementos mayores al número dado
function greaterThan (array, num) {
    return array.filter(element => element > num);
}
console.log(greaterThan(numbers, 10));

// 5. Dos arrays en 1
function twoArraysInOne(array1, array2) {
    return array1.concat(array2);
}
let desserts = ["tiramisú", "lemon pie", "pannacota"];
let fruits = ["apple", "strawberry", "watermelon"];
console.log(twoArraysInOne(desserts, fruits));

// 6. Elemento mayor de array
function maxElement (array) {
    return Math.max(...array);
}
// console.log(...numbers); ... operador de propagación
console.log(maxElement(numbers));

// 7. Elemento menor de array
function minElement (array) {
    return Math.min(...array);
}
console.log(minElement(numbers));

// 8. Elemento repetido
function countingOcc (array, elm) {
    return array.filter(item => item === elm).length;
}
console.log(fruits);
console.log(countingOcc(fruits, "lemon"));
console.log(countingOcc(fruits, "watermelon"));

// 9. No elementos duplicados
function noDuplication (array) {
    return array.filter((value, index) => array.indexOf(value) === index);
}
let bands = ["Linkin Park", "RHCP", "Linkin Park", "Artic Monkeys", "Linkin Park", "RHCP", "System of a Down"];
console.log(noDuplication(bands));

// 10. Elementos orden descendiente
function descOrder (array) {
    return array.sort((a, b) => b - a);
}
console.log(descOrder(numbers));




