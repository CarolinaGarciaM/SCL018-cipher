const cipher = {
  encode: (offset, texto) => {

    // Errores en el offset
    if (offset === null || offset === 0){
      throw new TypeError();
    }

    let mensajeCifrado = "";  
    let offsetCifrado = parseInt(offset);

    for (let i = 0; i < texto.length; i++) {
      let asciiCifrado = texto.charCodeAt(i); 

    // Mayúsculas
      if (asciiCifrado >= 65 && asciiCifrado <= 90) { 
        mensajeCifrado += String.fromCharCode(
          ((asciiCifrado - 65 + offsetCifrado) % 26) + 65
        );
      }

    // Minúsculas
      else if (asciiCifrado >= 97 && asciiCifrado <= 122) { 
        mensajeCifrado += String.fromCharCode(
          ((asciiCifrado - 97 + offsetCifrado) % 26) + 97 
        );
      }

    // Para que quede igual al principio?
      else { 
        mensajeCifrado += texto[i] 
      }
    }
    return mensajeCifrado;
  },

  decode: (offset, texto) => {

    // Errores en el offset
    if (offset === null || offset === 0){
      throw new TypeError();
    }

    let mensajeDescifrado = "";
    let offsetDescifrado = parseInt(offset);


    for (let i = 0; i < texto.length; i++) {
      let asciiDescifrado = texto.charCodeAt(i);

      // Mayúsculas
      if (asciiDescifrado >= 65 && asciiDescifrado <= 90) {
        mensajeDescifrado += String.fromCharCode(
          ((asciiDescifrado - 90 - offsetDescifrado) % 26) + 90
        );
      } 

      // Minúsculas      
      else if (asciiDescifrado >= 97 && asciiDescifrado <= 122) {
        mensajeDescifrado += String.fromCharCode(
          ((asciiDescifrado - 122 - offsetDescifrado) % 26) + 122
        );
      } 

      // Para que quede igual al principio?
      else { 
      mensajeDescifrado += texto[i] // Que quede igual al principio.
    }
  }
    return mensajeDescifrado;
  },
};

export default cipher;