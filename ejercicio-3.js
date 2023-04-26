/*Constantes.
Son datos que no cambian en la ejecución del código, se definen de la siguiente manera.
    const NOMBRE_CONSTANTE = valorConstante
Por ejemplo, en mátematicas el valor de PI no cambia, es cosntante. 
Vea el siguiente código*/

const PI=3.1416
//Otra manera de concatenar texto es: `Texto ${variable / constante}`
console.log(`El valor de PI es: ${PI}`)

const   segundosEnMinuto = 60
const   minutosEnHora = 60
const   horasEnDia = 24 

console.log(`Un minuto tiene ${segundosEnMinuto} segundos, hora tiene ${minutosEnHora} minutos, y un dia tiene ${horasEnDia} horas`)    




// "Sintaxis vieja"
//const userInfo = 'User info: ' + name + ' ' + surname + ' ' + telephone;

// "Nueva sintaxis"
//const userInfo = `User info: ${name} ${surname} ${telephone}`;
