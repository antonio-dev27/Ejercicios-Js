/*Funcion declarada.
Son funciones que forman parte del ámbito global del programa, que para que se ejecuten se debe hacer un llamado a la función, independientemente de donde se declaren se pueden ser llamadas desde cualquier parte del código.
*/

//Funcion declarada sin parametros y sin valor de retorno

console.log("-----------------------------------------------------")

function estoEsUnaFuncion(){
    console.log("Uno")
    console.log("Dos")
    console.log("Tres")
}

//Ivocacion de la funcion

estoEsUnaFuncion();

//Funcion declarada con parametros y valor de retorno

console.log("-----------------------------------------------------")

function saludar(nombre, edad){
    return `Hola mi nombre es ${nombre} y mi edad es ${edad}`
}

console.log(saludar("Jaime", 35));

//Asignación de valores por defecto a una funciones

console.log("-----------------------------------------------------")

function carrera(nombre="desconocido", carrera="desconocido"){
    return console.log(`Hola, mi nombre es ${nombre} y estudié ${carrera}`)
}

carrera("Jaime", "Programacion de Software")
carrera(); //Cuando no se agrega parametro muestra el valor asignado en la funcion


// punto 4 código que haga una función declarada para cada una de las siguientes operaciones:


// suma 

function suma (a,b){
	return a + b;
}

console.log(suma(4, 5));


// resta

function resta (a, b){
    return a - b;
}

console.log(resta(8,5));

// multiplicacion

function multiplicacion(a,b){
    return a*b
}
console.log(multiplicacion(4,2))


// division


function division(a,b){
    return a/b
}
console.log(division(4,2))




// Construir una función que convierta dólares a pesos colombianos y otra función que convierta pesos colombianos a dólares.


const dolarCop = function (a) {

    let valorDolar = 0.00023;
    let conversionCop = (a * valorDolar) / 1;

    return conversionCop;
}

const copDolar = function (a) {

    let valorCop = 4651;
    let conversionDolar = (a * valorCop) / 1;

    return conversionDolar;
}

let cop = 700000;
let dolar = 27;

let convertirCopDolar = dolarCop(cop);
let convertirDolarCop = copDolar(dolar);

console.log(`La conversión de pesos colombianos a dolar es de: $${convertirCopDolar}`);
console.log(`La conversión de dolar a pesos colombiano es de: $${convertirDolarCop}cop`);




// Construir un código que tenga una función para cada uno de los siguientes cálculos:

// Área de un cuadrado.

function areaCuadrado (a,b){
    return a*b;
}

// Área de un círculo. 

function areaCirculo ( radio ) {
    const PI = 3.1416;
    return PI * radio**2;
}

// Área de un triángulo.

function areaTriangulo (a,b){
    return (a*b)/2;
}

ladoa = 30;
ladob = 15;

radio = 24;

console.log(`el area de un cuadrado de cuyos lados miden ${ladoa} ${ladob} es de ${areaCuadrado(ladoa,ladob)} `)
console.log(`el area de un triangulo cuya base mide ${ladoa} y su altura es  ${ladob} es de ${areaTriangulo(ladoa,ladob)}`)
console.log(`el area de un circulo cuyo radio mide ${radio}  es de ${areaCirculo(radio)} `)