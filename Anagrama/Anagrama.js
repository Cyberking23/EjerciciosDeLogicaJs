/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function Anagrama(palabra1, palabra2) {
  if (palabra1.length !== palabra2.length) {
    console.log("No es un anagrama");
  }
  if (palabra1 === palabra2) {
    console.log("No es un anagrama");
  }

  let contador1 = {};
  for (let letra of palabra1) {
    contador1[letra] = (contador1[letra] || 0) + 1;
  }

  let contador2 = {};
  for (let letra of palabra2) {
    contador2[letra] = (contador2[letra] || 0) + 1;
  }

  for (let letra in contador1) {
    if (contador1[letra] !== contador2[letra]) {
      console.log("No es un anagrama");
    }
  }

  console.log(contador1);
  console.log(contador2);
  console.log("Es un anagrama");
}

console.log(Anagrama("amor", "roma"));
