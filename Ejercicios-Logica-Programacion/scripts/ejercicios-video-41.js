/* 
  24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

  25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

  26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5. 
*/

const ejercicio24 = (array = undefined) => {
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

  const asc = array.toSorted((a, b) => a + b);
  const desc = array.toSorted((a, b) => b - a);

  const arreglos = {
    asc,
    desc,
  };

  return console.log(arreglos);
};

// ejercicio24([1, 10, 24, 2, 0, 9, 27]);

const ejercicio25 = (array = undefined) => {
  if (array === undefined)
    return console.log("No ingresaste un arreglo de números");
  if (!(array instanceof Array))
    return console.log("El valor ingresado no es un arreglo");
  if (array.length === 1)
    return console.log(
      "No se puede operar con un arreglo que contenga un solo elemento"
    );

  const sinDuplicados = {
    original: array,
    depurado: array.filter(
      (value, index, self) => self.indexOf(value) === index
    ),
  };

  return console.log(sinDuplicados);
};

// ejercicio25(["x", 10, "x", 2, "10", 10, true, true]);

const ejercicio26 = (array = undefined) => {
  if (array === undefined)
    return console.log("No ingresaste un arreglo de números");
  if (!(array instanceof Array))
    return console.log("El valor ingresado no es un arreglo");
  if (array.length === 0)
    return console.log("No se puede operar con un arreglo vacío");

  let sumatoria = 0;

  //First way
  /* for (const element of array) {
    sumatoria = sumatoria + element;
  }

  return console.log(
    `Promedio de los elementos ingresados en el arreglo: ${
      sumatoria / array.length
    }`
  ); */

  //Another way
  sumatoria = array.reduce((total, element, index, arr) => {
    total += element;

    if (index === arr.length - 1) {
      return console.info(
        `El promedio de ${arr.join(" + ")} es: ${total / arr.length}`
      );
    } else {
      return total;
    }
  });
};

ejercicio26([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
