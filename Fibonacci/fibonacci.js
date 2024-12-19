/*La serie de Fibonacci es una secuencia matemática infinita de números naturales que se caracteriza por ser la suma de los dos números anteriores*/ 

function Fibonacci(numero){
    let SerieNumeros = [0,1] // Se definen los primeros 2 numeros de la serie de Fibonacci

    for(let i = 2 ; i < numero; i++){ //El valor de i del contador en 2 porque ya tenemos los primeros 2 valores de la serie
        SerieNumeros[i] = SerieNumeros[i - 1] + SerieNumeros[i - 2] //El valor de i es el valor del contador y lo que se hace con SerieNumeros[2-1] es acceder al valor del array que ya esta predeterminado arriba
    }

    return SerieNumeros
}

console.log(Fibonacci(10))
