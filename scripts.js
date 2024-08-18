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
/* function sumar(a, b, ...c) {
  resultado = a + b;

  c.forEach((element) => {
    resultado += element;
  });

  return console.log(resultado);
}

sumar(25, 70, 56, 87, 23, 56, 23); */

/* Spread Operator */
/* const arr1 = [1, 2, 3, 4, 5],
  arr2 = [6, 7, 8, 9, 0];

const arr3 = [arr1, arr2]; */
/*"Spreading"*/
/* const arr4 = [...arr1, ...arr2];

console.info(arr3);
console.log(`***********`);
console.log(arr4); */

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

// Función constructora
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

// Función constructora donde asignamos los métodos al Prototipo, no a la función como tal
// function Animal(nombre, genero) {
//   //Atributos
//   this.nombre = nombre;
//   this.genero = genero;
// }

// Métodos agregados al prototipo de la función constructora
// Animal.prototype.sonar = function () {
//   console.log("Hago sonidos por que estoy vivo");
// };

// Animal.prototype.saludar = function () {
//   console.log(`Hola me llamo ${this.nombre}`);
// };

// // Herencia Prototípica
// function Perro(nombre, genero, tamanio) {
//   this.super = Animal;
//   this.super(nombre, genero);
//   this.tamanio = tamanio;
// }

// Perro está heredando de Animal
// Perro.prototype = new Animal();
// Perro.prototype.constructor = Perro;

// Sobreescritura de métodos del Prototipo padre en el hijo
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

  //Métodos
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
  }

  sonar() {
    console.log(`Soy un perro y mi sonido es un ladrido`);
  }

  ladrar() {
    console.log(`Guau Guau!!!!!`);
  }
}

const mimi = new Animal("Mimi", "Hembra");
const scooby = new Perro("Scooby", "Macho", `Gigante`);

// console.log(mimi);
console.log(scooby);
scooby.saludar();
scooby.sonar();
scooby.ladrar();
