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
    userNameInput = document.getElementById('in_usuario').value;
    passwordInput = document.getElementById('in_contrasena').value;    
        
    var nuevoRegistro = new Usuario(userNameInput, passwordInput);

    // Agregamos el objeto nuevoRegistro al arreglo registros
    registros.push(nuevoRegistro);
};

/**
 * filtrarPorContrasena() Filtra el arreglo de acuerdo al parametro --filtro
 * Retorna Array. Nuevo arreglo filtrado por el parametro --filtro
 * @param  {Array}
 * @return  {Array}
 */
function filtrarPorContrasena(arreglo2Filter, filtro) {
    const registrosFiltrar = arreglo2Filter.filter(x => x.userPassword.length <= filtro);
    // Imprimir por consola el nuevo arreglo
    console.log(registrosFiltrar);
    return registrosFiltrar;
}

// Only for Codegrade
// module.exports.registros = registros;
// module.exports.filtrarPorContrasena = filtrarPorContrasena;
// module.exports.agregarRegistro = agregarRegistro;

