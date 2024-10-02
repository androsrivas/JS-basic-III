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
console.log(palindromeOrNot("Dabale arroz a la zorra el abad"))