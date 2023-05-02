function calculadora(num1, num2, operador) {
  try {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Solo se aceptan números");//excepción con `throw`
    }

    switch(operador) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          throw new Error("No se puede dividir por cero");
        } else {
          return num1 / num2;
        }
      case '^':
        return Math.pow(num1, num2);
      case '√':
         if (num1<0){
          throw new Error (" No es posible la raíz cuadrada de números negativos.");
         } else{
        return Math.sqrt(num1);
         }
      default:
        throw new SyntaxError();
    }
  } catch(error) {
    return error;
  }
}


console.log(calculadora(-5, 3, "√")); 
console.log(calculadora(45, 0, "/")); 
console.log(calculadora(5, 2,"+"));
console.log(calculadora(5, 2,"^"));
console.log(calculadora(5, 2,""));
console.log(calculadora(5, "f","^"));