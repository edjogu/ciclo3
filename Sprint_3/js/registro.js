let personas = [];
let campos = [];
let boton_agregar;
let lista_usuarios;

window.onload = inicio;

function inicio(){	

	campos.push(document.getElementById("nombre_usuario"));//0
	campos.push(document.getElementById("apellido"));//1	

	boton_agregar = document.getElementById("btn_agregar");
	boton_agregar.addEventListener("click",agregar);
  
  lista_usuarios = document.getElementById("usuarios");	
}

function agregar(evento){
	
let persona;
let respuesta = validarDatos();
  
	if(!respuesta.error)
	{
		persona = {
			nombre:campos[0].value,
			apellido:campos[1].value
		};
		personas.push(persona);
    console.log(personas);
		borrar_campos();
    actualizar_lista();
    longitudNombre(personas);
	}
	else
	{
		alert(respuesta.mensaje);
	}
}

function actualizar_lista(){
  var opt; 
  lista_usuarios.innerHTML = "";
  for(var i in personas)
  {
    var l = personas[i].nombre.length;
    console.log(l);
    opt= document.createElement('option');
    opt.innerHTML = `${personas[i].nombre} ${personas[i].apellido}`;
    lista_usuarios.appendChild(opt);
  }
}

function longitudNombre(arreglop) {
    for(var i in arreglop) {
        var cantCaracteres = arreglop[i].nombre.length;
        if(cantCaracteres <= 10) {
            console.log(arreglop[i].nombre ,cantCaracteres, "Es menor y cumple")
        } else {
            console.log(arreglop[i].nombre ,cantCaracteres, "No cumple")

        }

    }
}

function validarDatos(){
  let mensaje = "Error, verifique los siguientes campos:\n";
  let error = false;
  
  if(!campos[0].value){
    mensaje+= "Nombre\n";
    error = true;
  }
  if(!campos[1].value){
    mensaje+= "Apellido\n";
    error = true;
  }
  return {error:error,mensaje:mensaje};
}

function borrar_campos(){
	for (var i = 0; i < campos.length; i++) 
	{
		campos[i].value = "";
	}
}


function comparar_nombre(a, b) {
  if (a.nombre > b.nombre) {
    return 1;
  }
  if (a.nombre < b.nombre) {
    return -1;
  }
  // a must be equal to b
  return 0;
}

function comparar_apellido(a, b) {
  if (a.apellido > b.apellido) {
    return 1;
  }
  if (a.apellido < b.apellido) {
    return -1;
  }
  // a must be equal to b
  return 0;
}

function existeCorreo(arreglo,correo)
{
	for(var i in arreglo){
		//console.log(arreglo[i],i);//objeto, indice
		//console.log(arreglo[i].email);
		if(arreglo[i].email === correo)
		{
			return true;
		}
	}
	return false;
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validarCelular(celular){
	const re = /[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-\s]){3}|(\d{2}[\*\.\-\s]){4}|(\d{4}[\*\.\-\s]){2})|\d{8}|\d{10}|\d{12}/;
	return re.test(""+celular);
}