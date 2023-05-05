{
    "clave1": "valor1",
    "clave2": null,
    "clave3": 9,
    "clave4": true,
    "colores": ["Rosado", "Naranja", "Rojo", "Azul"],
    "Juan": {
        "telefono": "123456789", 
        "correo": "juan@correo.com", 
        "direccion": "Calle 123 # 45 - 67"
    }
}


//haga un JSON información que contenga la siguiente información: 1. Nombre 2. Apellido 3. Edad 4. Hobbies guardados en un arreglo. 5. Objeto Contacto con la siguiente información: 1. Correo 2. Objeto Teléfono 1.Teléfono celular 2.Teléfono fijo. 3. Dirección

{
    "nombre": "Juan",
    "apellido": "Pérez",
    "edad": 28,
    "hobbies": ["fútbol", "leer", "tocar guitarra"],
    "contacto": {
      "correo": "juan.perez@gmail.com",
      "telefono": {
        "celular": "314-123-4567",
        "fijo": "601-987-6543"
      },
      "direccion": "Calle 123 # 11-00, Ciudad Bogota "
    }
}



 //Realice un JSON para el siguiente planteamiento: En una tienda se tienen productos de aseo, alimentos y bebidas. Cada producto vendido en la tienda cuenta con las siguientes propiedades: a. Nombre b. Marca c. Valor  1. Valor de compra 2. Valor de venta d. Tipo (aseo, alimento, bebida) e. Inventario Para los siguientes productos crear un fichero JSON que represente esta información relativa a los productos que ofrece la tienda. a. Arroz, Diana b. Jabon, Ariel c. Detergente, Suavitel d. Gaseosa, Coca-Cola e. Aceite, Gourmet f. Galletas, Festival g. Cerveza, Poker h. Crema dental, Colgate 

  {
    "productos": [
      {
        "nombre": "Arroz",
        "marca": "Diana",
        "valor": {
          "compra": 2000,
          "venta": 2500
        },
        "tipo": "alimento",
        "inventario": 100
      },
      {
        "nombre": "Jabon",
        "marca": "Ariel",
        "valor": {
          "compra": 1500,
          "venta": 2000
        },
        "tipo": "aseo",
        "inventario": 50
      },
      {
        "nombre": "Detergente",
        "marca": "Suavitel",
        "valor": {
          "compra": 3000,
          "venta": 4000
        },
        "tipo": "aseo",
        "inventario": 30
      },
      {
        "nombre": "Gaseosa",
        "marca": "Coca-Cola",
        "valor": {
          "compra": 1200,
          "venta": 2000
        },
        "tipo": "bebida",
        "inventario": 80
      },
      {
        "nombre": "Aceite",
        "marca": "Gourmet",
        "valor": {
          "compra": 5000,
          "venta": 7000
        },
        "tipo": "alimento",
        "inventario": 20
      },
      {
        "nombre": "Galletas",
        "marca": "Festival",
        "valor": {
          "compra": 800,
          "venta": 1000
        },
        "tipo": "alimento",
        "inventario": 70
      },
      {
        "nombre": "Cerveza",
        "marca": "Poker",
        "valor": {
          "compra": 2500,
          "venta": 3000
        },
        "tipo": "bebida",
        "inventario": 40
      },
      {
        "nombre": "Crema dental",
        "marca": "Colgate",
        "valor": {
          "compra": 2000,
          "venta": 3000
        },
        "tipo": "aseo",
        "inventario": 60
      }
    ]
  }
  