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