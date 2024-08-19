/************************************* Ejercicios video 33 ***********************************************************/

/*
  1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

  2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

  3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

  4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. 
*/

/* Ejercicio 1 */
function ejercicioUno(param) {
  if (!param) {
    return console.error(`No se ingresó ninguna cadena de texto para operar`);
  }

  if (typeof param != "string") {
    return console.error(
      `No se puede recibir un distinto tipo de dato que una cadena de texto`
    );
  }

  let tamanio = 0;
  for (const element of param) {
    tamanio++;
    console.log(`${element} - ${tamanio}`);
  }
  return console.log(tamanio);
}
// ejercicioUno("Hola Mundo");

/* Ejercicio 2 */
function ejercicioDos(param, range) {
  if (!param || !range) {
    return console.error(
      `No se ingresó alguno de los dos parámetros necesarios para operar`
    );
  }

  if (typeof param != "string") {
    return console.error(
      `No se puede proceder si el tipo de dato del parámetro con el que se desea operar es distinto a string`
    );
  }

  if (typeof range != "number") {
    return console.error(
      `El tipo de dato del caracter que desea usarse para definir el rango no puede ser de distinto de número`
    );
  }

  return console.log(param.substring(0, range));
}
// ejercicioDos(`Hola mundo`, 4);

/* Ejercicio 3 */
function ejercicioTres(string, splitter) {
  !string
    ? console.warn(`No se puede operar con una cadena de texto vacía`)
    : typeof string != "string"
    ? console.warn(
        `El tipo de dato del parámetro que se usará para operar no puede ser distinto de una cadena de texto`
      )
    : !splitter
    ? console.warn(`El caracter separador no fue enviado`)
    : console.log(string.split(splitter));
}
// ejercicioTres("Hola, buenas tardes, mi nombre es Randall", ",");

/* Ejercicio 4 */
const ejercicioCuatro = (param, counter) => {
  if (!param) {
    return `No se envío el texto a imprimir`;
  } else if (!counter) {
    return `El número de veces que desea imprimirse el texto no fue enviado`;
  } else if (counter < 1) {
    return `El número de veces que desea imprimirse el texto no puede ser menor que UNO.`;
  } else {
    for (let index = 0; index <= counter; index++) {
      console.log(`${param} - ${index}`);
    }
  }
};
ejercicioCuatro(`Alexander`, 20);