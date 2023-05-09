
const ajax = new XMLHttpRequest(), //Variable ajax que instancia del objeto XMLHttpRequest
    $lista = document.getElementById("lista"), //variable que hace referencia al nodo ol del HTML id="lista"
    $fragmento = document.createDocumentFragment(); //Fragmento en donde se guardaran las listas

//Asignación de los eventos que se vayan a manipular en la petición
ajax.addEventListener("readystatechange", (e) => { 
    
    //if (ajax.readyState !== 4) return; 

    if (ajax.status >= 200 && ajax.status < 300) { //Si la respuesta es satisfactoria
        let json = JSON.parse(ajax.responseText); //Convierte la respuesta Ajax en un objeto

        for (const key in json) { //recorre el objeto
            console.log(`Llave: ${key}, Valor: ${json[key]}`)
            const $li = document.createElement("li"); //Crea el elemento li 
            $li.innerHTML = `${key}: ${json[key]}`; //Le asigna los valores del objeto al elemento li
            $fragmento.appendChild($li); //Agrega el elemento li al framento para luego insertarlo en el HTML
        }
        $lista.appendChild($fragmento); //Cuando termina de recorrer el objeto agrega los elementos li guardados en el fragmento al elemento lista
    } else { //Si la respuesta no es satisfactoria manda un mensaje de error
        let message = ajax.statusText || "Ocurrió un error";
        $lista.innerHTML = `Error ${ajax.status}: ${message}`;
    }


    // Según lo anterior haga un código que: 1. Cree una instancia del objeto XMLHttpRequest() 2. Ejecute el evento readystatechange. 3. Abra la petición con el método GET utilizando el siguiente JSON https://jsonplaceholder.typicode.com/posts/26 4. Envie la petición. 5. Dentro de la lógica de programación del evento imprima la instancia del objeto XMLHttpRequest() que creo en el primer paso. ¿Qué imprime por consola? ¿Qué nota en las propiedades del objeto XMLHttpRequest()? 6. Dentro de la lógica de programación del evento cree un if para que no se imprima la instancia del objeto cada vez que se cambia de estado. 7. Dentro de la lógica de programación del evento imprima lo siguiente por consola: 1. Respuesta en texto de la petición. 2. La URL de la petición. 3. Dependiendo del estado de la petición imprima los siguientes mensajes: 1. Petición no inicializada. 2. Cargando petición.  3. Petición cargada. 4. responseText tiene datos parciales 5. ¡Completado! iv. Dependiendo de la respuesta HTTP imprima los siguientes mensajes: 1. Status 200: respuesta correcta.                     2. Status 404: no encontrado. 3. Status 500: error interno del servidor. 

    console.log("...............Respuesta.....................")
    console.log(ajax.responseText)

    console.log("...............URL.......................")
    console.log(`La URL de la peticion es: ${ajax.responseURL}`)

    console.log("...........Estado Peticion.................")
    console.log(`El estado de la peticion es: ${ajax.readyState}`)

    switch (ajax.readyState) {
        case 1:
          console.log("Cargando petición");
          break;
        case 2:
          console.log("Petición cargada");
          break;
        case 3:
          console.log("responseText tiene datos parciales");
          break;
        case 4:
          console.log("¡Completado!");
          break;
      }

    console.log("...............Estado Peticion.......................")
    console.log(`Estado de respuesta HTTP: ${ajax.status}`)

    if (ajax.status === 200){
        console.log("respuesta correcta")
    }else if(ajax.status === 404){
        console.log("no encontrado.")
    }else if (ajax.status === 505){
        console.log("error interno del servidor")
    }else{
        console.log("error desconocido")
    }
});

/*Abre la petición con el método GET.*/
ajax.open("GET", "https://jsonplaceholder.typicode.com/posts/26");
/*envia la peticioN*/
ajax.send();