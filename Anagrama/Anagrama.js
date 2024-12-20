/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function sonAnagramas(palabra1, palabra2) {
  const Palabra1Lower = palabra1.toLowerCase(); //se convierte la palabra a miniscula
  const Palabra2Lower = palabra2.toLowerCase(); //se convierte la palabra a miniscula

  if (Palabra1Lower === Palabra2Lower) {
    return false; //Si son iguales no puede ser un Anagrama
  }

  const PalabraOrdenada1 = palabra1.split("").sort().join(""); //Primero se separa la palbra luego se ordena y luego se vuelve a unir
  const PalabraOrdenada2 = palabra2.split("").sort().join(""); //Primero se separa la palbra luego se ordena y luego se vuelve a unir

  if (PalabraOrdenada1 === PalabraOrdenada2) {
    return true; //Si las palabras son ordenadas bien entonces va a devolver true
  }
}
console.log(sonAnagramas("amor", "roma")); // true
console.log(sonAnagramas("amor", "amor")); // false
