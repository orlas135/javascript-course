/* 
  21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

  22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

  23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}. 
*/

const ejercicio21 = (array = undefined) => {
  if (array === undefined) return "No ingresaste un arreglo de números";
  if (!(array instanceof Array)) return "El valor ingresado no es un arreglo";
  if (array.length === 0) return "No se puede operar con un arreglo vacío";

  for (const element of array) {
    if (typeof element !== "number")
      return "Alguno de los elementos del arreglo no es un número, no se puede operar.";
  }

  const arreglo = array.map((el) => el * el);

  return `Arreglo original: ${array}.\nArreglo elevado al cuadro: ${arreglo}`;
};

console.log(ejercicio21([25, 40, 56, 12, 81]));

const ejercicio22 = (array) => {
  if (array === undefined)
    return console.log("No ingresaste un arreglo de números");
  if (!(array instanceof Array))
    return console.log("El valor ingresado no es un arreglo");
  if (array.length === 0)
    return console.log("No se puede operar con un arreglo vacío");

  for (const element of array) {
    if (typeof element !== "number")
      return console.log(
        "Alguno de los elementos del arreglo no es un número. No se puede operar."
      );
  }

  return console.log(
    `Arreglo original: ${array}. \n Valor máximo: ${Math.max(
      ...array
    )} \n Valor mínimo: ${Math.min(...array)}`
  );
};

ejercicio22([]);
ejercicio22([21, 65, 45, 87, 342, 252]);

const ejercicio23 = (array = undefined) => {
  if (array === undefined)
    return console.log("No ingresaste un arreglo de números");
  if (!(array instanceof Array))
    return console.log("El valor ingresado no es un arreglo");
  if (array.length === 0)
    return console.log("No se puede operar con un arreglo vacío");

  for (const element of array) {
    if (typeof element !== "number")
      return console.log(
        "Alguno de los elementos del arreglo no es un número. No se puede operar."
      );
  }

  const pares = array.filter((number) => number % 2 == 0);
  const impares = array.filter((number) => number % 2 !== 0);

  const arreglos = {
    pares,
    impares,
  };

  return console.log(arreglos);
};

ejercicio23([25, 8, 9, 3, 18, 6]);
