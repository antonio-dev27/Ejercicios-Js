/*Destructuración:
Asignación de los elementos de un arreglo u objeto a una variable*/

/*Sin destructuracion asignar los elementos de un arreglo u objeto a una variable se podria hacer de la siguiente manera*/

console.log("--------------Sin destructuración-------------------")

const numeros=[1,2,3]
let uno=numeros[0],
dos=numeros[1],
tres=numeros[2]

console.log(uno,dos,tres)

//Con destrucrturacion

console.log("--------------Con destructuración-------------------")

const [one, two, three]=numeros; //En una sola linea de codigo se asignan los valores de numero a las variables one, two y three
console.log(one,two,three)

//Con los objetos tambien es posible hacer destructuración siguiendo la misma lógica

const persona={
    nombre: "Ana",
    apellido: "Santos",
    edad: 23
}

const {nombre, apellido, edad}=persona; //deben tener el mismo nombre del la llave del objeto

console.log(nombre,apellido,edad)


//Según lo anterior haga un código que tenga un arreglo con los días de la semana y los asigne a variables con la siguiente nomenclatura diaUno, …, diaSiete, imprima las variables por consola. 

let dias_semana = [
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
    "domingo",
  ];
  let = [diaUno, diaDos, diaTres, diaCuatro, diaCinco, diaSeis, diaSiete] =dias_semana;
  console.log(diaUno, diaDos, diaTres, diaCuatro, diaCinco, diaSeis, diaSiete)

//Realice un código que cree un objeto mascota y tenga las siguientes propiedades a. Nombre b. Edad c. Tamaño d. Color Asigne las propiedades a variables e imprimalos por consola. 

const mascota={
    nombre_:"mascota",
    edad_:23,
    tamaño:10,
    color:"cafe"
}       

const {nombre_, edad_, tamaño, color}=mascota;

console.log(nombre_,edad_,tamaño,color)   