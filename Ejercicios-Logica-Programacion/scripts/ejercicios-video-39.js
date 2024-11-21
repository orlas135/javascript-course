/* 
  18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
  
  19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

  20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

*/

const ejercicio18 = (palabra = undefined) => {
  let vocales = 0,
    consonantes = 0;

  if (palabra === undefined || !palabra) {
    return "No se envió palabra para evaluar caracteres";
  }

  if (typeof palabra !== "string") {
    return console.log(`El valor ${palabra} no es una cadena de texto`);
  }

  palabra = palabra.toLocaleLowerCase();

  for (let letra of palabra) {
    if (/[aeiouáéíóú]/.test(letra)) vocales++;

    if (/[bcdfghjklmnpqrstvwxyz]/.test(letra)) consonantes++;
  }

  return console.log(
    `La palabra ${palabra} contiene un total de ${vocales} vocales y ${consonantes} consonantes`
  );
};

ejercicio18("ALEXANDER");

const ejercicio19 = (nombre = "") => {
  if (!nombre) return console.eroor("No ingresaste ningún valor");

  if (typeof nombre !== "string")
    return console.log(`El valor ${nombre} no es una cadena de texto`);

  let regExp = /^[A-Za-zÑñÁáéÉíÍóÓúÚÜü\s]/.test(nombre);

  return regExp
    ? console.info("El nombre enviado es válido")
    : console.info("El nombre enviado no es válido");
};

const ejercicio20 = (email = undefined) => {
  if (typeof email !== "string") {
    return console.log(
      "No se puede enviar algo que no sea una cadena de texto"
    );
  }

  if (!email) {
    return console.log(
      "No se envió dirección de correo electrónico para evaluar"
    );
  } else if (email === undefined) {
    return console.log("No se envió dirección de correo electrónico a evaluar");
  }

  if (
    /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/.test(
      email
    )
  ) {
    console.log("El correo electrónico enviado es correcto.");
  } else {
    console.log("El correo electrónico enviado no es correcto");
  }
};

ejercicio20("alexorlas96gmail.com");
