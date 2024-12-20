function calcularArea(poligono, ...dimensiones) {
    // Verificamos el tipo de polígono
    if (poligono === "triangulo") {
      // El área de un triángulo es (base * altura) / 2
      const [base, altura] = dimensiones;
      return (base * altura) / 2;
    } 
    else if (poligono === "cuadrado") {
      // El área de un cuadrado es lado * lado
      const [lado] = dimensiones;
      return lado * lado;
    } 
    else if (poligono === "rectangulo") {
      // El área de un rectángulo es base * altura
      const [base, altura] = dimensiones;
      return base * altura;
    } 
    else {
      return "Polígono no soportado";
    }
  }
  
  // Imprimir los resultados para cada polígono
  console.log("Área del triángulo: ", calcularArea("triangulo", 5, 10));  // 25
  console.log("Área del cuadrado: ", calcularArea("cuadrado", 4));      // 16
  console.log("Área del rectángulo: ", calcularArea("rectangulo", 4, 6));  // 24
  