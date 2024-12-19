/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

for (let i = 1; i <= 100; i++) { // Bucle que va del 1 al 100
    if (i % 3 === 0 && i % 5 === 0) { // Si el número es múltiplo de 3 y de 5
        console.log("FizzBuzz"); // Imprimir "FizzBuzz"
    } else if (i % 5 === 0) { // Si el número es múltiplo de 5
        console.log("Buzz"); // Imprimir "Buzz"
    } else if (i % 3 === 0) { // Si el número es múltiplo de 3
        console.log("Fizz"); // Imprimir "Fizz"
    } else { // Si el número no es múltiplo ni de 3 ni de 5
        console.log(i); // Imprimir el número
    }
}
    