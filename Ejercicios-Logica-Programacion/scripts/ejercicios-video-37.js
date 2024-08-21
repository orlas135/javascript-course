/************************************ Ejercicios video 37 ***********************************************/

/**
  12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

  13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

  14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/

const ejercicioDoce = (param = undefined) => {
  if (param === undefined) return console.log(`No se envió ningún parámetro`);
  if (typeof param !== "number") {
    if (isNaN(param)) {
      return console.log(`El parámetro enviado NO es un número`);
    }
  }

  if (param === 0) return console.log(`El número no puede ser cero`);

  if (Math.sign(param) === -1)
    return console.log(`No se puede operar con un número negativo`);

  let divisible = false;
  for (let index = 2; index < param; index++) {
    if (param % index === 0) {
      divisible = true;
      break;
    }
  }

  return divisible
    ? console.log(`El número NO es primo`)
    : console.log(`El número es primo`);
};
// ejercicioDoce(4);

const ejercicioTrece = (numero = undefined) => {
  if (!numero) return console.log(`No se envió el número a evaluar`);

  if (typeof numero !== "number") {
    if (isNaN(numero)) {
      return console.log(`El parámetro enviado no es un número`);
    } else {
      return numero % 2 == 0
        ? console.log(`El número es par`)
        : console.log(`El número es impar`);
    }
  }
};
// ejercicioTrece("920");

const ejercicioCatorce = (grados = undefined, escala = "") => {
  // if ((!(escala != "F") && !(escala != "C")) || typeof escala != "string") {
  //   console.log(typeof escala);

  //   return console.log(
  //     `No se envió un parámetro correcto para convertir (Únicas opciones: F o C)`
  //   );
  // }
  if (typeof grados !== "number") {
    if (isNaN(grados)) {
      return console.log(
        `El tipo de dato de los grados a convertir no puede ser distinto de numero`
      );
    }
  } else if (!escala || escala === " ") {
    return console.log(`No se envió parámetro de escala a convertir`);
  } else {
    if (escala.toUpperCase() === "F") {
      return console.log(
        `${grados} grados Fahrenheit convertidos a grados Celsius son: ${
          (grados - 32) * 0.555
        } grados Celsius`
      );
    } else if (escala.toUpperCase() === "C") {
      return console.log(
        `${grados} grados Celsius convertidos a grados Fahrenheit son: ${
          grados * (9 / 5) + 32
        } grados Fahrenheit`
      );
    }
  }
};
// ejercicioCatorce(400, "c");
