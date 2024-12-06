let id = Symbol("id");
let id_2 = Symbol("id_2");

const NOMBRE = Symbol("Nombre de persona (símbolo)");
const SALUDAR = Symbol("Función saludar");

const persona = {
  apellido: "Orlas",
  [NOMBRE]: "Alex",
};

// console.log(persona);

persona.nombre = "Alexander";

// console.log(persona);

persona[SALUDAR] = () => {
  console.log(`Hola`);
};
// console.log(persona);

// persona[SALUDAR]();

// for (const propiedad in persona) {
//   console.log(persona[propiedad]);
// }

/*Listando los símblos de un objeto */
console.log(Object.getOwnPropertySymbols(persona));

const set = new Set([
  1,
  2,
  3,
  4,
  5,
  5,
  6,
  6,
  7,
  8,
  9,
  9,
  10,
  "11",
  true,
  true,
  {},
  {},
  "hola",
  "HOLA",
  "hola",
]);
console.log(set);
console.log(`\nTamaño del set (solo cuenta los elementos únicos): ${set.size}`);

const set2 = new Set();

set2.add(1);
set2.add(1);
set2.add(2);
set2.add(3);
set2.add(4);
set2.add(5);
set2.add(6);

console.log("Recorriendo set 1");

for (const element of set) {
  console.log(element);
}

console.log("Recorriendo set 2");
set2.forEach((element) => {
  console.log(element * element);
});

let arreglo = Array.from(set2);
console.log(arreglo);

arreglo.forEach((element) => {
  console.log(element * 2);
});
