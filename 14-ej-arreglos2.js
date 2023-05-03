/*Existen metodos y propiedades que hacen que trabajar con arreglos sea más sencillo*/

//Crea una arreglo de 100 posiciones con el valor de false
console.log("-----------------Array(n).fill()----------------------")
const a= Array(100).fill(false) 
console.log(a)

const colores =["Rojo", "Azul", "Gris"]
console.log(colores)

//Con el método push() se agrega un elemento en la ultima posicion del arreglo.

console.log("-----------------push()----------------------")
colores.push("Verde")
console.log(colores)

//Con el método pop() se elimina el ultimo elemento del arreglo.
console.log("-----------------pop()----------------------")
colores.pop()
console.log(colores)

//Con el metodo slice() se crea una copia del arreglo

console.log("-----------------slice()----------------------")
const copiaColores =colores.slice();
console.log(copiaColores)

//La propiedad lenght obtiene el tamaño del arreglo.

console.log("-----------------lenght----------------------")
console.log(colores.length)


// haga un código que por medio de un ciclo llene un arreglo con los números del 1 al 100 en imprimalo en pantalla

let numeros=[];
for(let i=1; i<101; i++){
    numeros.push(i)
    
}
console.log(numeros)


//Haga un código que guarde los números pares del 1 al 100 en un arreglo e imprimalo en pantalla


const pares = [];

for(let i = 0; i < 101; i++){
    if(i % 2 === 0){
        pares.push(i);
        
    }
}

console.log(pares);


//Desarrolle un código que reciba un arreglo con 3 números, los ordene e imprima en pantalla en orden.

function ordenar(numeros = []) {
    let cantidad = numeros.length;
    // pivote :referencia usada para  comparar
    let pivote = numeros[cantidad - 1];
    let menores = [];
    let mayores = [];
  
    if (cantidad < 2) {
      // caso base: cuando el numero de elementos del array es 1 o 0
      return numeros;
    } else {}
    for (let i = 0; i < cantidad - 1; i++) {
      numeros[i] < pivote ? menores.push(numeros[i]) : mayores.push(numeros[i]);
    }
    // ... operador de propagación
    return [...ordenar(menores), pivote, ...ordenar(mayores)];
  }
  
  console.log(ordenar([10, 1, 8, 7]));



  // otra opcion de aordenamiento

  function ordenar(...numeros) {
    let desordenada = numeros;
    let limite = desordenada.length;
    let permutar;
  
    for (let i = 0; i < limite - 1; i++) {
      for (let j = 0; j < limite - i - 1; j++) {
  
        if (desordenada[j] > desordenada[j + 1]) {
          
          permutar = desordenada[j];
          desordenada[j] = desordenada[j + 1];
          desordenada[j + 1] = permutar;
          
        }
      }
    }
  
    return desordenada;
  }
  
  console.log(ordenar(9, 2, 10, 1));

  // La fácil es usar .sort normalmente en el momento de ordenar en la vida real programando



