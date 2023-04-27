/*While.
Permite ejecutar un código mientras se cumpla una condición.
Como se ve a continuación*/

console.log("-----------------Condicional while----------------------")

let cont=0

/*La variable cont aumenta en uno. Sigue siempre y cuando el contador sea menor que 10*/

while(cont<10){
    console.log(`El while va en ${cont}`)
    cont++
}

/*For
Permite ejecutar un código un número determinado de veces.
Como se ve a continuación*/

/*La variable i aumenta de uno en uno siempre que sea mejor que 10*/

console.log("-----------------Condicional for----------------------")

for (let i = 0; i < 10; i++) {
    console.log(`El for va en ${i}`)
}


//ejercicio 4  Imprima los números del 10 al 1.

//  solucion con for 

for (let i = 10; i >=1; i--) {
    console.log(i);
}

// solucion con while

let i = 10;

while(i) {
	console.log(i--);
	if(i === 0){
		console.log(i);
		break;
	}
}

// ejercicio 4 Imprima los números pares. 

let i = 18;

for(let i = 2; i < 19; i++){
	if(i % 2 === 0) {
		console.log(i);
	}
}


// ejercicio 5 Realice un código que sume los números del 1 al 5 e imprima el resultado.

let resultado = 0;

for (let f = 1; f <= 5; f++) {
    resultado +=f;
    console.log(`resultado es ${resultado}`)
}


// ejercicio 6 Haga un código con while que imprima la tabla de multiplicar del 7

contador = 1;
numero = 7;
while (contador <= 10) {
  console.log(`${numero} x ${contador} = ${numero * contador}`);
  contador++;
}



