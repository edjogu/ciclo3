// Declarar variables
var userNameInput, passwordInput, error;

// Funciones de Validacion
function isValidUserName(in_usuario) {
    return /^[0-9a-zA-Z]{3,9}$/.test(in_usuario) ? true : false;
}

function isValidPassword(in_contrasena) {
    return /^[0-9a-zA-Z]{6,}$/.test(in_contrasena) ? true : false;
}

// Asignamosa a las variables los inputs
userNameInput = document.getElementById('username');
passwordInput = document.getElementById('password');
error = document.getElementById('error');
error.style.color = 'red';


var form = document.getElementById('formulario');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    var mensajesError = [];

    if (userNameInput.value === null || userNameInput.value === '') {
        mensajesError.push('Ingresa un nombre');
    }  

    if (isValidUserName(userNameInput.value)) {
        mensajesError.push('Cumple username = true')
    } else {
        mensajesError.push('No cumple username = false')
    }
    
    if (isValidPassword(passwordInput.value)) {
        mensajesError.push('Cumple password = true')
    } else {
        mensajesError.push('No cumple password = false')
    } 

    error.innerHTML =  mensajesError.join(', ');

});