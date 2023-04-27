/*if/else
Permite que se realice una instrucción u otra de acuerdo a la evaluación de una condición. Su estructura es:
    if(condicion){
        instrucciones si la condicion se cumple
    }else{
        instrucciones si la condicion no se cumple
    }
En la condicion se utilizan operadores de comparación.
*/

console.log("------------------------if/else---------------------------")
let edad=26;


if (edad>=18) { //Inicio de la condicion
    console.log("Eres mayor de edad, preparate:)") //Instruccion si se cumple
} else {
    console.log("Eres menor de edad, disfruta tu vida:)") //Instruccion si no se cumple.
}

/*Condiciones anidadas
Permite que se realice una instrucción u otra de acuerdo a la evaluación de varias condiciones. Su estructura es:
    if(condicion){
        instrucciones si la condicion se cumple
    }else if (condicion){
        instrucciones si la condicion se cumple
    }else{
        instrucciones si la condicion no se cumple
    }
*/

console.log("-----------------Condicional anidada----------------------")


let hora = 19

/*Devuelve un saludo dependiendo la hora:
    -De 24 a las 05: Dejen dormir!
    -De 06 a las 11: Buenos días!
    -De 12 a las 18: Buenas tardes!
    -De 19 a las 23: Buenas noches!*/

if (hora>= 0 && hora <=5) { //Primera condición
    console.log("Dejen dormir!")
} else if(hora>=6 && hora<=11){ //Segunda condición
    console.log("Buenos días!")
} else if(hora>=12 && hora<=18){ //Tercera condición
    console.log("Buenas tardes!")
} else{
    console.log("Buenas noches!")//Instruccion si no se cumple ninguna condición
}

/*Operador ternario
Se suelen usar para condicones simples con la siguiente estructura
    (condicion) ? InstruccionVerdadero : InstruccionFalso
Para entender mejor vea el siguiente ejemplo*/

console.log("-----------------Operador ternario----------------------")

let a=8,
    b=3

let esMayor= (a>b) ? `${a} es mayor que ${b}` : `${a} es menor que ${b}`
console.log(esMayor)

/*Switch - Case
Estructura de control condicional que según una expresión evalua distintos posibles casos. Su sistaxis es:
    switch(expresion){
        case valor1:
            //instruccion
            break;
        case valor2:
            //instruccion 2
            break;
        default:
            //instruccion si ningun caso se cumple
            break;
    }
El siguiente ejmplo devuelve un día dependiendo un número dado
    0 Domingo
    1 Lunes
    2 Martes
    3 Miercoles
    4 Jueves
    5 Viernes
    6 Sabado*/

console.log("-----------------switch/case----------------------")

let dia=3

switch (dia) {
    case 0:
        console.log("El día es domingo")
        break;
    case 1:
        console.log("El día es lunes")
        break;
    case 2:
        console.log("El día es martes")
        break;
    case 3:
        console.log("El día es miercoles")
        break;
    case 4:
        console.log("El día es jueves")
        break;
    case 5:
        console.log("El día es viernes")
        break;
    case 6:
        console.log("El día essabado")
        break;

    default:
        console.log("el día no existe")
        break;
}



// punto numero 4 del ejercicio:  código que dados tres números, evalúe cual es el número mayor.
//Imprimalos en consola ordenados.

let a = 1;
let b = 2;
let c = 3;

if (a > b && b > c) {
  console.log(`${a} es el mayor, ${b} es el medio, y ${c} es el menor.`);
} else if (b > a && a > c) {
  console.log(`${b} es el mayor, ${a} es el medio, y ${c} es el menor.`);
} else if (c > b && b > a) {
  console.log(`${c} es el mayor, ${b} es el medio, y ${a} es el menor.`);
} else if (a > c && c > b) {
  console.log(`${a} es el mayor, ${c} es el medio, y ${b} es el menor.`);
} else if (b > c && c > a) {
  console.log(`${b} es el mayor, ${c} es el medio, y ${a} es el menor.`);
} else if (c > a && a > b) {
  console.log(`${c} es el mayor, ${a} es el medio, y ${b} es el menor.`);
} else {
  console.log("Los números son iguales.");
}


// punto 5 Haga un código que evalúe si un número es par o impar.

let numero = 4; // aquí se asigna el número 4 a la variable numero

// Verifica si el número es par o impar y lo imprime en consola
if (numero % 2 === 0) {
  console.log(`${numero} es un número par.`);
} else {
  console.log(`${numero} es un número impar.`);

  const precioPorDocena = 60000;
}

// punto 6 del ejercicio valor descuento segun la cantidad de docenas compradas 

  // Solicitar la cantidad de docenas a comprar
  let  cantidadDeDocenas = 12
  
  let descuento = 0;
  
  if (cantidadDeDocenas >= 10) {
    descuento = 0.2;
  } else if (cantidadDeDocenas >= 5) {
    descuento = 0.15;
  } else if (cantidadDeDocenas > 1) {
    descuento = 0.1;
  }
  
  const precioSinDescuento = cantidadDeDocenas * precioPorDocena;
  const montoDelDescuento = precioSinDescuento * descuento;
  const precioConDescuento = precioSinDescuento - montoDelDescuento;
  
  console.log(`Cantidad de docenas: ${cantidadDeDocenas}`);
  console.log(`Descuento: ${descuento * 100}%`);
  console.log(`Precio sin descuento: $${precioSinDescuento}`);
  console.log(`Monto del descuento: $${montoDelDescuento}`);
  console.log(`Precio con descuento: $${precioConDescuento}`);
