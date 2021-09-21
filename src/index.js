import cipher from './cipher.js';

let mensaje = document.getElementById('mensajeIngresado');
let movimientos = document.getElementById('offset');
let cifrar = document.getElementById('botonCifrar');
let descifrar = document.getElementById('botonDescifrar');
let resultado = document.getElementById('mensajeEntregado');

cifrar.addEventListener('click', cifrado);
function cifrado() {
    let frase = mensaje.value;
    let desplazamiento = movimientos.value;
    resultado.value = cipher.encode (desplazamiento, frase);
    resultado.value = resultado.value.toUpperCase(); 
}

descifrar.addEventListener ('click', descifrado);
function descifrado () {
    let frase = mensaje.value;
    let desplazamiento = movimientos.value;
    resultado.value = cipher.decode (desplazamiento, frase);
    resultado.value = resultado.value.toUpperCase();
}