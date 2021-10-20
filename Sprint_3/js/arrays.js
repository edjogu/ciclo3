let registros = [
    {
        nombre: 'Juan', 
        contrasena: 'password1'
    },
    {
        nombre: 'Pedro',
        contrasena: 'password2'
    }
]

console.log(registros);

var registro = {
    nombre: 'Luis',
    contrasena: 'password3'
}

registros.push(registro);
console.log(registros);