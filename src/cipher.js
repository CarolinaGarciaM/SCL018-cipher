const cipher = {
  encode: (texto, offset) => {
    console.log(offset);
    console.log(texto);

    // Consideramos agregarle como segunda palabra Cifrado a las variables creadas para mantener el orden y la diferencia.
    // Se crea una variable del mensaje (cifrado) donde "" es para que el usuario ingrese el valor.
    // Se crea una variable del offset (cifrado) y se parsea (convierte un argumento tipo cadena y
    // devuelve en entero) + el offset.
    // Comprobamos en consola que funcione.

    let mensajeCifrado = ""; 
    let offsetCifrado = parseInt(offset); 
    console.log(offsetCifrado);

    // for (crea un bucle), abrimos (), ya que dentro irá lo que queremos en el bucle.
    // Creamos una variable i = 0.
    // < (menor que, i = 0 es menor que texto.length) texto.length representa la longitud de una cadena.
    // i++ 
    // ASCII (comienza el abecedario desde el 65)
    // Se crea una variable, en este caso asciiCifrado (para ordenarlo bien le agregamos Cifrado).
    // charCodeAt(i)... (retorna (), por ej si es (0) retorna 65 porque el abecedario comienza desde el 65)
    // Comprobamos en consola que funcione.

    for (let i = 0; i < texto.length; i++) {
      let asciiCifrado = texto.charCodeAt(i);
      console.log(asciiCifrado);
    
    // if para una condición es true.
    // asciiCifrado >= (menor o igual que) 
    // 65 (A en ASCII) 
    // && (el valor de retorno es el de la operación lógica sin la asginación, ej si fuera &&= devolvería &&)
    // asciiCifrado <= (mayor o igual que)
    // 90 (Z en ASCII)
    // Variable mensajeCifrado += String.fromCharCode
    // Fórmula de Michelle (x (número de la letra en ASCII ) - 65 + n (valor fijo)) % 26 (residuo del 26) + 65(asciiCifrado - 65 + offsetCifrado) % 26 + 65 
    // Comprobamos en consola que funcione.

      if (asciiCifrado >= 65 && asciiCifrado <= 90) { 
        mensajeCifrado += String.fromCharCode(
          ((asciiCifrado - 65 + offsetCifrado) % 26) + 65 
        );
        console.log(mensajeCifrado);

    // else if
    // asciiCifrado >= (menor o igual que)
    // 97 
    // &&
    // asciiCifrado <== (mayor o igual que)
    // Variable mensajeCifrado += String.fromCharCode
    // Fórmula (asciiCifrado - 97 + offsetCifrado) % 26 + 97

      } else if (asciiCifrado >= 97 && asciiCifrado <= 122) {
        mensajeCifrado += String.fromCharCode(
          ((asciiCifrado - 97 + offsetCifrado) % 26) + 97
        );

    // else if
    // asciiCifrado === 
    // 32
    // mensajeCifrado += String.fromCharCode(asciiCifrado)

      } else if (asciiCifrado === 32) {
        mensajeCifrado += String.fromCharCode(asciiCifrado);
    
    // else
    // mensajeCifrado += String.fromCharCode
    // (asciiCifrado - 33 + offsetCifrado) % 26 + 33
    // Comprobamos en consola que funcione.
    // Retorne ()

      } else {
        mensajeCifrado += String.fromCharCode(
          ((asciiCifrado - 33 + offsetCifrado) % 26) + 33
        );
      }
    }
    console.log(mensajeCifrado);
  
    return mensajeCifrado;
  },

  decode: (texto, offset) => {
    console.log(texto);
    console.log(offset);

    let mensajeDescifrado = "";
    let offsetDescifrado = parseInt(offset);
    console.log(offsetDescifrado);

    for (let i = 0; i < texto.length; i++) {
      let asciiDescifrado = texto.charCodeAt(i);

      if (asciiDescifrado >= 65 && asciiDescifrado <= 90) {
        mensajeDescifrado += String.fromCharCode(
          ((asciiDescifrado - 90 - offsetDescifrado) % 26) + 90
        );

      } else if (asciiDescifrado >= 97 && asciiDescifrado <= 122) {
        mensajeDescifrado += String.fromCharCode(
          ((asciiDescifrado - 122 - offsetDescifrado) % 26) + 122
        );

      } else if (asciiDescifrado === 32) {
        mensajeDescifrado += String.fromCharCode(asciiDescifrado);

      } else if (asciiDescifrado >= 33 && asciiDescifrado <= 64) {
        mensajeDescifrado += String.fromCharCode(
          ((asciiDescifrado - 64 - offsetDescifrado) % 26) + 64
        );
      }

      console.log(mensajeDescifrado);
    }
    return mensajeDescifrado;
  },
};

export default cipher;


/* El String.fromCharCode() es método estático 
que devuelve una cadena creada mediante el uso de una 
secuencia de valores Unicode especificada.
ASCII es un método de traducción de letras 
y símbolos a números.
[] Los arrays simples, también llamados "tablas" o "matrices",
son el método más común y simple de almacenar datos. Técnicamente, 
un Array es un objeto intrínseco de JavaScript. Admite datos del tipo cadenas, 
números, objetos, arrays, true, false, null.
Fórmula (x + n) % 26 -> (o + 33) % 26 -> 33%26=7
En el código ASCII comienza en el 65 el alfabeto, total 97 */

/*const cipher = {

  encode(txt, offset) {
      let resultadoCifrado = '';
      let txtUpper = txt.toUpperCase(); // Resolver sólo para este caso
      for(let i = 0; i < txtUpper.length; i++) {
        let ASCII = 0;
        let x = txtUpper[i].charCodeAt(0);
       ASCII = (texto - 97 + offset) % 26 + 65; //cifra, para descifrar (texto + 37) (97 a)
        let textoCifrado = String.fromCharCode(ASCII); 
        resultadoCifrado += textoCifrado; */ // shift + alt + a
      /*return resultadoCifrado; */
  
    // decode(offset, textarea) {
    //   let prueba = "prueba";
    //   console.log(prueba)
    // }
 /* }


/*decode(textarea, offset) {
        let resultadoDescifrado = '';
    
        for(let i = 0; i < textarea2.length; i++) {
          let ASCII = 0;
          let texto = textarea[i].charCodeAt(0);
          ASCII = (texto + 37 + offset) % 26 + 65; //cifra, para descifrar (texto + 37)
          let textoDescifrado = String.fromCharCode(ASCII); 
          resultadoDescifrado += textoDescifrado;
      /*  }
        return resultadoDescifrado;
    /*  }
    
      // decode(offset, textarea) {
      //   let prueba = "prueba";
      //   console.log(prueba)
    /*  // }
  
  export default cipher;
   */