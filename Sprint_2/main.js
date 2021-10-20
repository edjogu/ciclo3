// Declarar variables
var userNameInput, passwordInput, estilo1, estilo2;

// Asignamos las variables cuando cargue la pagina
window.onload = function() {
    // Asignamosa a las variables los inputs
    userNameInput = document.getElementById('username');
    passwordInput = document.getElementById('password');

    estilo1 = document.getElementById('option1');
    estilo2 = document.getElementById('option2');

    userNameInput.addEventListener('input', createListener(isValidUserName));
    passwordInput.addEventListener('input', createListener(isValidPassword));

};

// Funciones de Validacion
function isValidUserName(in_usuario) {
    return /^[0-9a-zA-Z]{3,9}$/.test(in_usuario);
}

function isValidPassword(in_contrasena) {
    return /^[0-9a-zA-Z]{6,}$/.test(in_contrasena);
}

// Creamos el Listener
function createListener(validator) {
    return e => {
        const input = e.target;
        const text = e.target.value;
        const valid = validator(text);
        const showTip = text !== "" && !valid;
        const toolTip = e.target.nextElementSibling;
        showOrHideTip(showTip, toolTip, input);
    };
}

function showOrHideTip(show, element, message = "first", input) {
    if(message == "first") {
        if (show) {
            element.style.display = "inherit";
            input.style.borderBottom = "2px solid #dea54b"
        } else {
            input.style.borderBottom = "2px solid #00bfb2"
            element.style.display = "none";
        }
    }

    else if (message == "second") {
        if (show) {
            input.style.borderBottom = "2px solid red"
            element.style.visibility = "visible";
        } else {
            input.style.borderBottom = "2px solid #00bfb2"
            element.style.display = "hidden";
        }
    }

}