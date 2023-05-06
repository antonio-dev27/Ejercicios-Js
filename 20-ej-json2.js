/*JSON (JavaScript Object Notation).
Es básicamente una notación que es comúnmente utilizada para el intercambio de información*/

//JSON.parse(str). Convierte el JSON a un objeto y lo devuelve.

console.log("-----------Conversión de JSON a un Objeto----------------")

//JSON
const jsonUsuario = `{
  "nombre": "Mariana",
  "edad": 36
}`;

const usuario = JSON.parse(jsonUsuario); //Conversion con el método parse(JSON)
console.log(`Hola! Soy ${usuario.nombre} y tengo ${usuario.edad}`) //Impresión del objeto

console.log("-----------Conversión de un Objeto a JSON----------------")

//Objeto persona
const persona = { 
    nombre: "Mariana",
    edad: 36,
    amigos: ["Juan", "Fernanda", "José"]
  };

//JSON.stringify(obj). Convierte un objeto Javascript a JSON y la devuelve.
const jsonPersona = JSON.stringify(persona); //Conversión del objeto a json
console.log(jsonPersona) //Impresion del json


// haga un código que: a. Reciba los datos personales (nombre, apellido, correo, teléfono, nacionalidad) de 5 usuarios en objetos y los pase a formato JSON. Imprima tanto los objetos como los JSON generados. 


let usuarios = [
  {
    nombre: "Enzo",
    apellido: "Perez",
    correo: "enzope@gmail.com",
    telefono: 1234567,
    nacionalidad: "argentino",
  },
  {
    nombre: "Sergio",
    apellido: "Ramos",
    correo: "sramos@gmail.com",
    telefono: 7654321,
    nacionalidad: "español",
  },
  {
    nombre: "Martin",
    apellido: "Demichellis",
    correo: "Mishu@gmail.com",
    telefono: 2468101,
    nacionalidad: "argentino",
  },
  {
    nombre: "Mateo",
    apellido: "Retegui",
    correo: "argentano@gmail.com",
    telefono: 9632587,
    nacionalidad: "italiano",
  },
  {
    nombre: "Karim",
    apellido: "Benzema",
    correo: "gatoblanco@gmail.com",
    telefono: 8524679,
    nacionalidad: "frances",
  },
];

usuarios.forEach((e, i) => {
  console.log(JSON.stringify(e));
  console.log(usuarios[i]);
});



//b. Reciba un JSON con información de sus 5 películas favoritas y pase esta información a objetos. Imprima los JSON y los objetos generados.

let peliculas = `{
  "peliculas": [
    {
      "nombre": "El secreto de sus ojos",
      "anio": "2009",
      "duracion": "129 min",
      "director": "Juan José Campanella"
    },
    {
      "nombre": "Relatos salvajes",
      "anio": "2014",
      "duracion": "122 min",
      "director": "Damián Szifron"
    },
    {
      "nombre": "La historia oficial",
      "anio": "1985",
      "duracion": "152 min",
      "director": "Luis Puenzo"
    },
    {
      "nombre": "Nueve Reinas ",
      "anio": "2000",
      "duracion": "116 minutos",
      "director": "Fabián Bielinsky."
    },
    {
      "nombre": "El aura",
      "anio": "2005",
      "duracion": "130 min",
      "director": "Fabián Bielinsky"
    }
  ]
}`;

let listaPeliculas = JSON.parse(peliculas);
console.log(listaPeliculas);
for (let i = 0; i < listaPeliculas.peliculas.length; i++) {
  console.log(listaPeliculas.peliculas[i]);
}

