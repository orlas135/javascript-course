/************************************* Ejercicios video 33 ***********************************************************/

/*
  1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

  2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

  3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

  4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. 
*/

/* Ejercicio 1 */
function ejercicioUno(param) {
  let tamanio = 0;
  for (const element of param) {
    tamanio++;
    console.log(`${element} - ${tamanio}`);
  }
  return console.log(tamanio);
}
// ejercicioUno(`Hola mundo`);

/* Ejercicio 2 */
function ejercicioDos(param, range) {
  return console.log(param.substring(0, range));
}
// ejercicioDos(`Hola mundo`, 4);

/* Ejercicio 3 */
function ejercicioTres(string, splitter) {
  let array = string.split(splitter);
  return console.log(array);
}
// ejercicioTres(`Hola qué tal`, " ");

/* Ejercicio 4 */
const ejercicioCuatro = (param, counter) => {
  for (let index = 1; index <= counter; index++) {
    console.log(`${param} - ${index}`);
  }
};
ejercicioCuatro(`Alexander`, 4);
