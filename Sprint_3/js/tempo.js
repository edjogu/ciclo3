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

// Declarar variables
var userNameInput, passwordInput;

// Declarar un arreglo global en donde se almacenen cada uno de los registros
let registros = [];
let passwFilter = [];

// Funciones de Validacion

/**
 * agregaRegistro() Agrega un usuario al arreglo
 * Retorna NA
 * @param  {NA}
 * @return  {NA}
 */
function agregarRegistro() {
    // Creamos la clase Usuario
    function Usuario(userName, userPassword) {
        this.userName = userName;
        this.userPassword = userPassword;
    }

    // Asignamos los valores a las variables usando la propiedad -value-
    var userNameInput = document.getElementById('in_usuario').value;
    var passwordInput = document.getElementById('in_contrasena').value;    
    
    var nuevoRegistro = new Usuario(userNameInput, passwordInput);    

    // Agregamos el objeto nuevoRegistro al arreglo registros
    registros.push(nuevoRegistro);
    console.log(registros);
    document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevoRegistro.userName+'</td><td>'+nuevoRegistro.userPassword+'</td></tbody>';     
};

/**
 * filtrarPorContrasena() Filtra el arreglo de acuerdo al parametro --filtro
 * Retorna Array. Nuevo arreglo filtrado por el parametro --filtro
 * @param  {Array}
 * @return  {Array}
 */
function filtrarPorContrasena(registros, filtro) {
    console.log("Filtrando")
    for (i=0; i<= registros.length-1; i++) {
        if(registros[i].userPassword.length <= filtro) {
            passwFilter.push(registros[i]);            
            document.getElementById("tablafiltro").innerHTML += '<tbody><td>'+passwFilter[i].userName+'</td><td>'+passwFilter[i].userPassword+'</td></tbody>'; 
            console.log(passwFilter);
        }      
    }    
}

// Only for Codegrade
// module.exports.registros = registros;
// module.exports.filtrarPorContrasena = filtrarPorContrasena;
// module.exports.agregarRegistro = agregarRegistro;


