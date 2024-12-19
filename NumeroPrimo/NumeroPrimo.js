// Función que comprueba si un número es primo
function esPrimo(numero) {
    if (numero <= 1) return false; // Los números menores o iguales a 1 no son primos
    if (numero === 2) return true; // El 2 es el único número par que es primo
    if (numero % 2 === 0) return false; // Los números pares mayores que 2 no son primos

    // Comprobar divisores impares desde 3 hasta la raíz cuadrada del número
    for (let i = 3; i <= Math.sqrt(numero); i += 2) {
        if (numero % i === 0) {
            return false; // Si encontramos un divisor, el número no es primo
        }
    }
    return true; // Si no encontramos ningún divisor, el número es primo
}

// Imprimir los números primos entre 1 y 100
for (let i = 1; i <= 100; i++) {
    if (esPrimo(i)) {
        console.log(i);
    }
}
