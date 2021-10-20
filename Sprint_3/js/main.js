/***************
 * @fileoverview Archivo JS para manipular datos en un arreglo *
 * @version     1.0 *
 * @author      guzmanE
 *
 * ----
 * Cambios:
 * Version 1.0 Initial version
 * ----
 * 
 ***************/

// Declarar un arreglo global en donde se almacenen cada uno de los registros
let campos = [];
let registros = [];
let passwFilter = [];
let btnAgregar;
let pFiltro = 6;

window.onload = inicio;

function inicio() { 
    campos.push(document.getElementById('in_usuario'));
    campos.push(document.getElementById('in_contrasena'));

    btnAgregar = document.getElementById('btn_agregar');
    btnAgregar.addEventListener("click", agregarRegistro); 
}

/**
 * agregaRegistro() Agrega un usuario al arreglo
 * Retorna NA
 * @param  {NA}
 * @return  {NA}
 */
function agregarRegistro() {
    let registro = {
        usuario: campos[0].value, 
        contrasena: campos[1].value 
    };


    registros.push(registro);
    console.log(registros); 
    //document.getElementById("tabla").innerHTML += '<tbody><td>'+registros[0].usuario+'</td><td>'+registros[1].contrasena+'</td></tbody>'; 
    borrarCampos();
    filtrarPorContrasena(registros, pFiltro);    
}

/**
 * filtrarPorContrasena() Filtra el arreglo de acuerdo al parametro --filtro
 * Retorna Array. Nuevo arreglo filtrado por el parametro --filtro
 * @param  {Array}
 * @return  {Array}
 */
function filtrarPorContrasena(arreglo, filtro) {
    const passwFilter = arreglo.filter(x => x.contrasena.length <= filtro);
    console.log(passwFilter);
    return passwFilter;
}

function borrarCampos(){
	for (var i = 0; i < campos.length; i++) 
	{
		campos[i].value = "";
	}
}