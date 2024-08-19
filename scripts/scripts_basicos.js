/*Cadenas*/
/* let nombre1 = "Alex";
let nombreUno = "Alex";
let nombreOne = new String("Alex"); */

/*Números*/
/* let numero_uno = 7;
let numeroUno = new Number(7); */

/*Funciones*/

//Declaradas
/* function multiplicarNumeros(a, b) {
  return console.log(`El resulta de multiplicar ${a} * ${b} es: ${a * b}`);
} */

//Expresadas
/* const saludo = function (nombre) {
  return console.log(`Hola ${nombre}`);
}; */

//Expresada (Flecha)
// const miFuncion = (num1, num2) => num1 + num2;

//Expresada con nombre
/* const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
}; */

/*Arreglos*/

// let numero = [2, 4, "Veinticinco", "Cuarenta", 30];

/*Objetos*/
/* let persona = {
  nombre: "Alexander",
  apellido: "Orlas",
  edad: 28,
  correo: "alexorlas96@gmail.com",
  telefono: "452169562",
  saludar: function () {
    console.log(`mi nombre es ${this.nombre} y tengo ${this.edad} años`);
  },
  hobbies: ["bailar", "programar", "montar en moto", "pasear"],
  contacto: {
    instagram: "uhasdka8",
    twitter: "led_zepelyn",
  },
}; */

// console.log(`Resultado factorial: ` + factorial(7));
// persona.saludar();

/* Continue */
/* Omite la iteración */
// const arregloNumeros = Array.of(1, 3, 5, 10, 7, 9);
// for (let index = 0; index < arregloNumeros.length; index++) {
//   if (arregloNumeros[index] % 2 == 0) {
//     continue;
//   }
//   console.log(arregloNumeros[index]);
// }

/* Destructuring */
/* const destructuring = [1, 2, 3, 4, 5];

const [primero, segundo, tercero, cuarto, quinto] = destructuring;
console.log(primero);

const persona = {
  nombre: "Alexander",
  apellido: "Orlas",
  profesiones: ["Bailarín-Instructor", "E-Commerce", "Dev"],
};

const { nombre, apellido, profesiones } = persona;
console.log(profesiones); */

/* Parámetros REST */
function sumar(a, b, ...c) {
  resultado = a + b;

  c.forEach((element) => {
    resultado += element;
  });

  return console.log(resultado);
}

sumar(25, 70, 56, 87, 23, 56, 23);

/* Spread Operator */
const arr1 = [1, 2, 3, 4, 5],
  arr2 = [6, 7, 8, 9, 0];

const arr3 = [arr1, arr2];
/*"Spreading"*/
const arr4 = [...arr1, ...arr2];

console.info(arr3);
console.log(`***********`);
console.log(arr4);

/* POO */
/* Prototipos */

/*
  Clases - Modelo a seguir.
  Objetos - Es una instancia de una clase
  Atributos - es una característica o propiedad del objeto (son variables dentro de un objeto)
  Métodos - son las acciones que un objeto puede realizar (son funciones dentro de un objeto)
*/

// const animal = {
//   nombre: "Snoopy",
//   sonar() {
//     console.log("Hago sonidos por que estoy vivo");
//   },
// };

// const animal2 = {
//   nombre: "Lola Bunny",
//   sonar() {
//     XMLDocument;
//     console.log("Hago sonidos por que estoy vivo");
//   },
// };

// console.log(animal);
// console.log(animal2);

// //Función constructora
// function Animal(nombre, genero) {
//   //Atributos
//   this.nombre = nombre;
//   this.genero = genero;

//   //Métodos
//   this.sonar = function () {
//     console.log("Hago sonidos por que estoy vivo");
//   };

//   this.saludar = function () {
//     console.log(`Hola me llamo ${this.nombre}`);
//   };
// }

//Función constructora donde asignamos los métodos al Prototipo, no a la función como tal
// function Animal(nombre, genero) {
//   //Atributos
//   this.nombre = nombre;
//   this.genero = genero;
// }

//Métodos agregados al prototipo de la función constructora
// Animal.prototype.sonar = function () {
//   console.log("Hago sonidos por que estoy vivo");
// };

// Animal.prototype.saludar = function () {
//   console.log(`Hola me llamo ${this.nombre}`);
// };

// Herencia Prototípica
// function Perro(nombre, genero, tamanio) {
//   this.super = Animal;
//   this.super(nombre, genero);
//   this.tamanio = tamanio;
// }

//Perro está heredando de Animal
// Perro.prototype = new Animal();
// Perro.prototype.constructor = Perro;

//Sobreescritura de métodos del Prototipo padre en el hijo
// Perro.prototype.sonar = function () {
//   console.log("Soy un perro y mi sonido es un ladrido");
// };

// Perro.prototype.ladrar = function () {
//   console.log("Guauuu Guauuu !!!!");
// };

// const snoopy = new Perro("Snoopy", "Macho", "Mediano"),
//   lolaBunny = new Animal("Lola Bunny", "Hembra");

// console.log(snoopy);
// console.log(lolaBunny);

// snoopy.sonar();
// snoopy.saludar();
// snoopy.ladrar();

// lolaBunny.sonar();
// lolaBunny.saludar();

/* Clases */
class Animal {
  /*El constructor de una clase es un método especial que se ejecuta al momento de crear instancias de la clase que lo contiene */
  constructor(nombre, genero) {
    //Atributos
    this.nombre = nombre;
    this.genero = genero;
  }

  Métodos;
  sonar() {
    console.log("Hago sonidos por que estoy vivo");
  }

  saludar() {
    console.log(`Hola me llamo ${this.nombre}`);
  }
}

class Perro extends Animal {
  constructor(nombre, genero, tamanio) {
    //Método que manda a llamar al constructor de la clase padre
    super(nombre, genero);
    this.tamanio = tamanio;
    this.raza = null;
  }
  sonar() {
    console.log(`Soy un perro y mi sonido es un ladrido`);
  }
  ladrar() {
    console.log(`Guau Guau!!!!!`);
  }
  /*Los métodos estáticos son aquellos que se pueden ejecutar sin necesidad de instanciar la clase */
  static queEres() {
    console.log(
      `Los perros somos animales mamíferos que pertenecemos a la familia de los caninos. Somos considerados los mejores amigos del hombre.`
    );
  }
  /*Método getter*/
  get getRaza() {
    return this.raza;
  }
  /*Método setter*/
  set setRaza(raza) {
    this.raza = raza;
  }
}

Perro.queEres();

const mimi = new Animal("Mimi", "Hembra");
const scooby = new Perro("Scooby", "Macho", `Gigante`);

console.log(mimi);
console.log(scooby);
scooby.saludar();
scooby.sonar();
scooby.ladrar();

/*Métodos nuevos */
console.log(scooby.getRaza);
scooby.setRaza = `Gran Danés`;
console.log(scooby.getRaza);

console.clear();

/* Objetos nativos de JS */

/****************************** Objeto Console ********************************* */
// console.log(console);
// console.error(`This is an error`);
// console.warn(`Esto es una advertencia`);
// console.info(`Mensaje informativo`);
// console.log(`Registro de lo que ha pasado en nuestra aplicación`);
// console.clear limpia la consola

let nombre = "Alex",
  apellido = "Orlas",
  edad = "28";

console.info(
  `Hola, mi nombre es %s %s y tengo %d años`,
  nombre,
  apellido,
  edad
);

//console.log(window); //ventana
//console.log(document); //documento

//Mostrar todas las propiedades, métodos de un objeto como un objeto
//console.dir(document);
//console.dir(window);

//Agrupar logs
console.group(`Los cursos de JonMircha en YT`);
console.log(`JavaScript`);
console.log(`Node JS`);
console.log(`Básicos de la WEB`);
console.log(`Flexbox`);
console.log(`Diseño y programación WEB`);
console.groupEnd();

console.table(Object.entries(console).sort());

const numeros = [1, 2, 3, 4, 5];
const vocales = ["a", "e", "i", "o", "u"];
console.table(numeros);

const perro = {
  nombre: `Luna`,
  raza: `Criollita`,
  color: `Café`,
};

console.table(perro);
console.clear();

console.time(`Cuánto tiempo tarda mi código`);
const arreglo = Array(1000000);

for (let index = 0; index < arreglo.length; index++) {
  arreglo[index] = index;
}

console.timeEnd(`Cuánto tiempo tarda mi código`);

console.clear();

for (let index = 0; index < 100; index++) {
  console.count(`Iteración: `);
  console.log(index);
}
console.clear();

let x = 3,
  y = 2,
  pruebaXY = `Se espera que X < Y siempre`;

console.assert(x < y, { x, y, pruebaXY });
console.clear();

/****************************************Objeto Date*************************************************/

console.info(Date());

let fecha = new Date();
console.info(fecha);

console.log(fecha.getDate()); //Día del mes
console.log(fecha.getDay()); //Día de la semana
console.log(fecha.getMonth()); //Mes
console.log(fecha.getFullYear()); //Año
console.log(fecha.getHours()); //Horas
console.log(fecha.getMinutes()); //Minutos
console.log(fecha.getSeconds()); //Segundos
console.log(fecha.getMilliseconds()); //Milisegundos

/*Conversiones */
console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());

/* */
console.log(fecha.getTimezoneOffset());

console.log(Date.now());

let cumpleAlex = new Date(1996, 4, 29);
console.log(cumpleAlex);

console.clear();

/* Operadores de Cortocircuito */
console.log;
function saludar(nombre) {
  nombre = nombre || "Desconocido"; //Cortocircuitador
  console.log(`Hola ${nombre}`);
}
saludar(`Jon`);
saludar();

console.log(`Cadena` || `Valor de la derecha`); //Cortocircuitando con OR
console.log(19 || `Valor de la derecha`); //Cortocircuitando con OR
console.log(true || `Valor de la derecha`); //Cortocircuitando con OR
console.log([] || `Valor de la derecha`); //Cortocircuitando con OR
console.log({} || `Valor de la derecha`); //Cortocircuitando con OR

console.log(null || `Valor de la derecha`); //Cortocircuitando con OR
console.log(false || `Valor de la derecha`); //Cortocircuitando con OR
console.log(0 || `Valor de la derecha`); //Cortocircuitando con OR
console.log(undefined || `Valor de la derecha`); //Cortocircuitando con OR
console.log(`` || `Valor de la derecha`); //Cortocircuitando con OR

console.log(null && `Valor de la derecha`); //Cortocircuitando con AND
console.log(false && `Valor de la derecha`); //Cortocircuitando con AND
console.log(0 && `Valor de la derecha`); //Cortocircuitando con AND
console.log(undefined && `Valor de la derecha`); //Cortocircuitando con AND
console.log(`` && `Valor de la derecha`); //Cortocircuitando con AND

console.log(`Cadena` && `Valor de la derecha`); //Cortocircuitando con AND
console.log(19 && `Valor de la derecha`); //Cortocircuitando con AND
console.log(true && `Valor de la derecha`); //Cortocircuitando con AND
console.log([] && `Valor de la derecha`); //Cortocircuitando con AND
console.log({} && `Valor de la derecha`); //Cortocircuitando con AND

/*Expresiones regulares*/
let cadena = `Lorem, ipsum dolor sit amet8 consectetur adipisicing elit. Lorem Esse quas ipsum deleniti. Ducimus adipisci, cupiditate ex debitis porro, distinctio dignissimos aspernatur necessitatibus lorem neque sapiente lorem suscipit, cum eveniet iusto aliquam quibusdam.`;
// let expReg = new RegExp("Lorem", "ig");
// console.log(expReg.test(cadena));
// console.log(expReg.exec(cadena));

let expReg2 = /lorem{1}/gi;
console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));

/*Funciones Anónimas Autoejecutables - IIFE*/

//alert(`Hola`); //Ejemplo "nativo"

(function () {
  console.log(`Autoejecutable`);
})();

(function (d, w, c) {
  console.log(`Autoejecutable 2`);
  console.log(d);
  c.log(`Usando console`);
})(document, window, console);

//Versión normal
(function () {
  console.log(`Versión normal`);
})();

//Versión unaria
+(function () {
  console.log(`Versión unaria`);
})();

//Versión Facebook
!(function () {
  console.log(`Versión Facebook`);
})();
