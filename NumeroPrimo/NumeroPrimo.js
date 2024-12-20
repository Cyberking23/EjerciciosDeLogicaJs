// Función para comprobar si un número es primo
function NumeroPrimo(numero){
    if(numero < 2){
        return false //No es primo
    }

    for(let i=2; i<=Math.sqrt(numero); i++){
        //Recorre el for hasta la raiz cuadrada del numero
        if(numero % i == 0){
            return false //Si la division modular da 0 significa que tiene otro numero divisible 
        }
    }
    return true

}

for(let i = 1; i< 100; i++){
    if(NumeroPrimo(i)){
        console.log(i)
    }
}