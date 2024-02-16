console.log("Hola mundo Node.JS");

/**
 * Adds two numbers together.
 *
 * @param {number} num1 - The first number to be added
 * @param {number} num2 - The second number to be added
 * @return {number} The sum of num1 and num2
 */
function addNumbers(num1, num2) {
    console.log("La suma de los numeros es: " + (num1 + num2));
    return num1 + num2;
}

addNumbers(9, 3);