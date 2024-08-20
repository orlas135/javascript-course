/************************************* Ejercicios Video 35 *************************************************/
/*
  5) Programa una función que invierta las palabras de una cadena de texto, pe.miFuncion("Hola Mundo") devolverá "odnuM aloH".

  6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
  
  7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
  
  8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

/*Ejercicio 5*/
const ejercicioCinco = (param) => {
  if (!param) return console.log(`La cadena de texto no fue enviada`);
  if (!isNaN(param)) return console.log(`El valor ingresado es un número`);
  if (param == " ")
    return console.log(`La cadena de texto no puede estar vacía`);

  return console.log(param.split("").reverse().join(""));
};
// ejercicioCinco("Hola Mundo");

/*Ejercicio 6 V1*/

const ejercicioSeis_V1 = (cadena = "", param = "") => {
  if (!cadena)
    return console.log(`La cadena de texto a evaluar no fue enviada`);

  if (typeof cadena !== "string")
    return console.log(
      `El tipo de dato del elemento a evaluar no puede ser distinto de una cadena de texto (string)`
    );
  if (!param)
    return console.log(`El texto a buscar en el texto no fue enviado`);

  let contador = 0;
  let cadenaSeparada = cadena.split(" ");

  cadenaSeparada.forEach((element) => {
    if (element === param) {
      contador++;
    }
  });

  return console.log(
    `El texto se encuentra un total de ${contador} veces en el texto enviado`
  );
};
// ejercicioSeis_V1(`Hola mundo hola mundo hola hola mundo hola`, `hola`);

/* Ejericio 7 */

function ejercicio7() {}

/* Ejercicio 8 */
