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

