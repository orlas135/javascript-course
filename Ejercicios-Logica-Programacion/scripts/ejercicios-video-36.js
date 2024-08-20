/*********************** Ejercicios video 36 ****************************** */

/*
  9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

  10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

  11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/

const ejercicioNueve = () => {
  console.log(Math.floor(Math.random() * (600 - 500) + 500));
};
// ejercicioNueve();

const ejercicioDiez = function (numero) {
  if (!numero) {
    return console.log(`No se envió el número para evaluar`);
  }

  if (typeof numero !== "number") {
    if (isNaN(numero)) {
      return console.log(`El parámetro enviado no es un número`);
    } else {
      let alReves = numero.toString().split("").reverse().join("");
      console.log(alReves);

      return alReves === numero
        ? console.log(`El número es capicúa`)
        : console.log(`El número no es capicúa`);
    }
  }
};
ejercicioDiez("252");

const ejercicioOnce = (numero) => {
  if (isNaN(numero)) return console.log(`El parámetro enviado no es un número`);

  if (Math.sign(numero) < 0)
    return console.log(`El número no puede ser menor que cero`);

  let factorial = 0;

  for (index = numero - 1; index > 0; index--) {
    factorial = numero * index;
    numero = factorial;
  }

  return console.log(`El factorial del número es: ${factorial}`);
};
// ejercicioOnce(9);
