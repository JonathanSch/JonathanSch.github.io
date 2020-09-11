let nombre = document.getElementById('nombre');
let titulo = document.getElementById('titulo')
const boton = document.getElementById('lopaterick')

boton.addEventListener('click', () => {
    if (nombre.value == '') {
        titulo.innerHTML = 'No tienes nombre ponlo antes bb'
    }
    else {
        titulo.innerHTML = `Hola ${nombre.value}, mi nombre es Erick Lopata y te saludo amigo`
    }

})