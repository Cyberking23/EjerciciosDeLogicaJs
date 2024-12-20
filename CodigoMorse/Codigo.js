// Definir el alfabeto en código morse
const morseCode = {
    "A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".", "F": "..-.", "G": "--.", "H": "....", "I": "..", "J": ".---",
    "K": "-.-", "L": ".-..", "M": "--", "N": "-.", "O": "---", "P": ".--.", "Q": "--.-", "R": ".-.", "S": "...", "T": "-",
    "U": "..-", "V": "...-", "W": ".--", "X": "-..-", "Y": "-.--", "Z": "--..",
    "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
    "0": "-----", ",": "--..--", ".": ".-.-.-", "?": "..--..", "/": "-..-.", "-": "-....-", "(": "-.--.", ")": "-.--.-", "&": ".-...",
    ":": "---...", ";": "-.-.-.", "=": "-...-", "+": ".-.-.", "_": "..--.-", "$": "...-..-", "@": ".--.-.", " ": "  "
  };
  
  // Función para convertir texto a morse
  function textoAMorse(texto) {
    return texto.toUpperCase().split('').map(caracter => {
      if (morseCode[caracter] !== undefined) {
        return morseCode[caracter];
      }
      return '';  // Ignorar caracteres no soportados
    }).join(' ').trim();
  }
  
  // Función para convertir morse a texto
  function morseATexto(morse) {
    const morseInvertido = Object.fromEntries(Object.entries(morseCode).map(([key, value]) => [value, key]));
    return morse.split('  ').map(palabra => {
      return palabra.split(' ').map(caracter => {
        return morseInvertido[caracter] || '';  // Ignorar códigos morse desconocidos
      }).join('');
    }).join(' ');
  }
  
  // Función para detectar el tipo de entrada y realizar la conversión
  function convertirTexto(texto) {
    if (texto.includes('.') || texto.includes('-')) {
      return morseATexto(texto);  // Si contiene puntos o rayas, es morse
    } else {
      return textoAMorse(texto);  // Si no, lo consideramos texto
    }
  }
  
  // Ejemplo de uso
  console.log(convertirTexto("Hola Mundo"));  // Convierte texto a morse
  console.log(convertirTexto(".... --- .-.. .-  -- ..- -. -.. ---"));  // Convierte morse a texto
  