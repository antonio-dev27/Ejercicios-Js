/*Funciones expresadas o anonimas.
Las funciones expresadas hacen parte del ámbito concreto del programa, es decir, estas funciones no existen hasta que la expresión que las genera es ejecutada. Se consideran una buena practica de programación para tener el código ordenado*/

console.log("--------------------Función Expresada-----------------------");
const funcionExpresada = function () {
    return console.log("Esta es una función expresada!");
}

funcionExpresada();

/*Funciones anonimas autoejecutables (IIFE).
Son funciones que se ejecutan al momento de crearlas. Su sintaxis es la siguiente:
(function (parametros){//contenido de la funcion})(parametros);
*/

console.log("----------Funciones anonimas autoejecutables (IIFE)-------------");

(function () {
    console.log("Mi primera funcion anonima autoejecutable (IIFE)");
})();

(function (c) {
    c.log("Mi segunda funcion anonima autoejecutable (IIFE) con parametros");
})(console);


//haga un código que tenga un arreglo de 5 posiciones en donde guarde las siguientes películas. a. La milla verde b. Parásitos c. El viaje de Chihiro d. Coco e. Interstellar Con un ciclo recorralo e imprimalo en pantalla con el siguiente mensaje: “Película #posicion+1: nombrePelicula”



const peliculas = ['la milla verde', 'parásitos', 'el viaje de chihiro', 'coco', 'interstellar'];

for (let i = 0; i < peliculas.length; i++) {
    console.log(`Pelicula(${i}):${peliculas[i]}`)
}
0


// otra opcion de resolver el ejercicio
let movies = [
    "La milla verde",
    "Parásitos",
    "El viaje de Chihiro",
    "Coco",
    "Interstellar",
].forEach((e, index) => console.log(`pelicula: ${index} ${e}`));