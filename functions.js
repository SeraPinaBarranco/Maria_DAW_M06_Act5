let btn_so = document.getElementById("choose-so");
btn_so.addEventListener("click", (event) => enviarDatos(event));
//btn_so.addEventListener('click', enviarDatos(event))//*No válido

let myForm = document.forms[0];
//myForm.

//Funcion qu envía los datos del formulario
function enviarDatos(evt) {
  evt.preventDefault();
  comprobarNombre();
  comprobarCorreo()
}

function comprobarNombre() {
  let nombre = document.getElementById("nombre");
  let patron = /[A-Za-z]{3,}$/;
  //if(nombre.length >= 3 && nombre.length < 8 && nombre.test(/[A-Z]{1}[a-z]{1,2} /))
  patron.test(nombre.value)
    ? msgError("OK!", nombre, "green")
    : msgError("Mínimo 3 letras", nombre, "red");
}

function comprobarCorreo() {
  let nombre = document.getElementById("correo");
  let patron = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  
  patron.test(nombre.value)
    ? msgError("OK!", nombre, "green")
    : msgError("Correo incorrecto", nombre, "red");
}

/**
 *
 * @param {String:mensaje de error} params
 * @param {NodeElement} element
 * @param {CSS color} color
 */
function msgError(params, element, color) {
  let padre = element.parentNode;
  //Borra el mensaje de error encaso de existir como hermano del input
  element.nextElementSibling !== null
    ? padre.removeChild(padre.lastChild)
    : null;

  let error = document.createElement("span");
  error.style.color = color;
  error.innerHTML = params;
  padre.appendChild(error);

  //console.log(nombre.parentNode);
  //nombre.parentNode.appendChild(error);
}
