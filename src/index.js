import cipher from './cipher.js';
    
console.log(cipher);

let mensaje = document.getElementById('mensajeIngresado');
let movimientos = document.getElementById('offset');
let cifrar = document.getElementById('botonCifrar');
let descifrar = document.getElementById('botonDescifrar');
let resultado = document.getElementById('mensajeEntregado');

cifrar.addEventListener('click', cifrado);
function cifrado() {
    let frase = mensaje.value;
    let desplazamiento = movimientos.value;
    resultado.value = cipher.encode (frase, desplazamiento)
    resultado.value = resultado.value.toUpperCase(); 
}

descifrar.addEventListener ('click', descifrado);
function descifrado () {
    let frase = mensaje.value;
    let desplazamiento = movimientos.value;
    resultado.value = cipher.decode (frase, desplazamiento);
    resultado.value = resultado.value.toUpperCase();
};

/* import cipher from './cipher.js';

cipher.encode(textarea, offset); FUNCION REPETIDA NO TIENE ACCESO AL CICLO DE LA FUNCION FCIFRAR
cipher.decode(textarea, offset);

let cifrar = document.getElementById('botoncifrar'); 

let desplazamiento = document.getElementById('botondesplazamiento');
let mensaje = document.getElementById('mensaje1').value;*/

/* function fcifrar () {
    let textarea = document.getElementById('mensaje1').value;
    let offset = parseInt(document.getElementById('botondesplazamiento').value);
    let resultadoCifrado = cipher.encode(textarea, offset);
    document.getElementById("mensaje2").value=resultadoCifrado;
   

    console.log(resultadoCifrado);
    console.log(textarea);
    console.log(offset);

} 

 cifrar.addEventListener('click', fcifrar); 

let descifrar = document.getElementById('botondescifrar');

function fdescifrar () {
    let textarea = document.getElementById('mensaje1').value;
    let offset = parseInt(document.getElementById('botondesplazamiento').value);
    let resultadoDescifrado = cipher.decode(textarea, offset);
    document.getElementById("mensaje2").value=resultadoDescifrado;
}

descifrar.addEventListener('click', fdescifrar);


desplazamiento.addEventListener('click', fcifrar); */


