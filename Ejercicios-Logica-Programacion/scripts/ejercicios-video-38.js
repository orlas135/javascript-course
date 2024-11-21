/******************************************Ejercicios video 38 *************************************** */

/* 
  15) Programa una función para convertir números de base binaria a decimal y viceversa, pe.miFuncion(100, 2) devolverá 4 base 10.

  16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

  17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/

/* const ejercicioQuince = (numero = undefined, sistema = undefined) => {
//   if (numero === undefined)
//     return console.warn("No se ingresó número para convertir");

//   if (typeof numero !== "Number")
//     return console.error(`El valor "${numero}" no es un número`);

//   if (base === undefined)
//     return console.warn("No ingresaste la base a convertir");

//   if (base === 2) {
//     return console.info(
//       `${numero} base ${base} = ${parseInt(numero, base)} base 10`
//     );
//   } else if (base === 10) {
//     return console.info(
//       `${numero} base ${base} = ${numero.toString(base)} en base 2`
//     );
//   } else {
//     return console.warn("La base que se envió para convertir no es válida");
//   }
 }; */

/* const ejercicioDieciseis = (cantidad = undefined, descuento = undefined) => {
  if (cantidad === undefined) {
    return console.warn("No enviaste la cantidad para aplicarle un descuento");
  } else if (typeof cantidad !== "number") {
    return console.warn(
      "El tipo de dato de la cantidad NO puede ser distinto de un número"
    );
  }

  if (descuento === undefined) {
    return "No se envió el descuento a aplicar";
  } else if (typeof descuento !== "number") {
    return console.log(
      "El tipo de dato del descuento a aplicar no puede ser distinto de un número"
    );
  }

  if (descuento === 0) {
    return console.warn(`No se aplicará descuento. Valor total: ${cantidad}`);
  } else if (Math.sign(descuento) === -1) {
    return console.warn(
      `No se puede aplicar un descuento negativo a la cantidad. Total: ${cantidad}`
    );
  } else {
    return console.log(
      `El ${descuento}% de descuento de ${cantidad} es: ${
        (cantidad * descuento) / 100
      }. Total: ${cantidad - (cantidad * descuento) / 100}`
    );
  }
};
ejercicioDieciseis(50000, 40); */

function ejercicioDiecisiete(
  anio = undefined,
  mes = undefined,
  dia = undefined
) {
  if (anio === undefined) {
    return console.warn("No se envió el año para poder evaluar");
  } else if (typeof anio !== "number") {
    return console.warn("El año enviado no es un número");
  }

  if (mes === undefined) {
    return console.warn("No se envió mes para poder evaluar");
  } else if (typeof mes !== "number") {
    return console.warn("El mes enviado no es un número");
  }

  if (dia === undefined) {
    return console.warn("No se envió dia para poder evaluar");
  } else if (typeof dia !== "number") {
    return console.warn("El día enviado no es un número");
  }

  let fecha = new Date(anio, mes, dia);

  let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    anios = 1000 * 60 * 60 * 24 * 365,
    aniosHumanos = Math.floor(hoyMenosFecha / anios);

  console.log(
    `Total de años transcurridos desde la fecha indicada: ${aniosHumanos} años.`
  );
}
ejercicioDiecisiete(2012, 11, 20);
