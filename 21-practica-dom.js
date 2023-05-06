//Según lo anterior y en base al documento practica.html haga un código que:

//1. Devuelva por consola el elemento asociado al id “descripcion”. Utilice el método getElementById()
console.log(document.getElementById("descripcion"));

//2. Devuelva por consola el elemento asociado al id “descripcion”. Utilice el método querySelector()
console.log(document.querySelector("#descripcion"));

//3. Devuelva por consola todos los elementos li en forma de lista. Utilice el método querySelectorAll()
console.log(document.querySelectorAll("li"));

//4. Devuelva por consola la cantidad de elementos listados con li con el siguiente mensaje
//“Hay cantidadElementos elementos en la lista.”
console.log(
  `hay ${document.querySelectorAll("li").length} elementos en la lista`
);

//e. Genere una lista de todos los elementos li y recorra la lista con ayuda de un ciclo.
document.querySelectorAll("li").forEach((e) => console.log(e));

//f. Con ayuda de la propiedad textContent agregue el siguiente parrafo a practica.html.
document.body.appendChild(document.createElement("p")).textContent =
  "En el año 2008 la competición fue llevada a cabo en el Reino Unido en la Universidad de Reading en donde se presentaron 13 candidatos de los cuales se seleccionaron 6 programas finalistas: Alice, Brother Jerome, Elbot, Eugene Goostman, Jabberwacky y Ultra Hal. Los seis programas tuvieron que interactuar con los 12 jueces manteniendo una conversación mediante un computador durante cinco minutos en donde se plantean una serie de preguntas con el fin de determinar si es un computador o un humano. En la edición del 2008 ninguno  logré pasar el Test de Turing, aunque el ganador de la medalla de bronce fue el programa Elbot, que estuvo muy cerca de pasar esta prueba ya que consiguió convencer a 3 de los 12 jueces, es decir el 25% de los jueces pensó que estaba conversando con un ser humano.";

//g. Con ayuda de la propiedad innerHTML agregue el siguiente código HTML a practica.html. <a href="#">Enlace principal</a>
const $a = document.createElement("a");
$a.setAttribute("href", "#");
$a.textContent = "Enlace Principal";
const $ul = document.querySelector("ul");
$ul.insertAdjacentElement("afterbegin", $a);

//h. Agregue el siguiente arreglo a una lista no ordenada a practica.html con el titulo “Meses del año”
//["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  
  function agregarLista(lista = [], titulo) {
    document.write(`<h3>${titulo}</h3>`);
    const $ul = document.body.appendChild(document.createElement("ul"));
  
    lista.forEach((e) => {
      $ul.appendChild(document.createElement("li")).textContent = e;
    });
  }
  
  agregarLista(meses, "Meses del año");
