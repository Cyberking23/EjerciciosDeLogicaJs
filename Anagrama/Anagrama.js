function sonAnagramas(palabra1, palabra2) {
    // Paso 1: Comparar longitudes
    if (palabra1.length !== palabra2.length) {
        return false;
    }

    // Paso 2: Verificar si son exactamente iguales
    if (palabra1 === palabra2) {
        return false;
    }

    // Paso 3: Contar la frecuencia de cada letra
    let contador1 = {};
    let contador2 = {};

    for (let letra of palabra1) {
        contador1[letra] = (contador1[letra] || 0) + 1;
    }

    for (let letra of palabra2) {
        contador2[letra] = (contador2[letra] || 0) + 1;
    }

    // Paso 4: Comparar frecuencias
    for (let letra in contador1) {
        if (contador1[letra] !== contador2[letra]) {
            return false;
        }
    }

    return true;
}

// Ejemplo de uso
console.log(sonAnagramas("amor", "roma")); // Debería retornar true
console.log(sonAnagramas("casa", "saco")); // Debería retornar false
