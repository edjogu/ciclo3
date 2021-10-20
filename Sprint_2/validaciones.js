/***************
 * @fileoverview Archivo JS de Validaciones *
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

// Asignamos las variables cuando cargue la pagina
window.onload = function() {
    // Asignamosa a las variables los inputs
    userNameInput = document.getElementById('in_usuario');
    passwordInput = document.getElementById('in_contrasena');
};

// Funciones de validación

/**
 * validar_nombreUsuario() Verifica si el nombre de Usuario es válido
 * Retorna true, si cumple, caso contrario retorna false
 * @param  {string}
 * @return  {boolean}
 */
function validar_nombreUsuario(in_usuario) {
    return /^[0-9a-zA-Z]{3,9}$/.test(in_usuario) ? true : false;
}


/**
 * validar_contrasena() Verifica si Contraseña es válida
 * Retorna true, si cumple, caso contrario retorna false
 * @param  {string}
 * @return  {boolean}
 */
function validar_contrasena(in_contrasena) {
    return /^[0-9a-zA-Z]{6,}$/.test(in_contrasena) ? true : false;
}

// Only for Codegrade
// module.exports.validar_nombreUsuario = validar_nombreUsuario;
// module.exports.validar_contrasena = validar_contrasena;

