/*Symbol*/

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

/*Listando los símbolos de un objeto */
console.log(Object.getOwnPropertySymbols(persona));

/*Sets */

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

/*Maps */
let mapa = new Map();

mapa.set("nombre", "Alex");
mapa.set("apellido", "Orlas");
mapa.set("edad", 28);

console.log(mapa);
console.log(mapa.size);
console.log(mapa.has("correo"));
console.log(mapa.has("nombre"));
console.log(mapa.get("nombre"));

mapa.set("nombre", "Alexander Orlas");
console.log(mapa);

mapa.delete("apellido");
console.log(mapa);

const mapa2 = new Map([
  ["nombre", "condorito"],
  ["edad", 28],
  ["animal", "ave"],
]);

console.log(mapa2);

for (const [llave, valor] of mapa2) {
  console.log(`Llave: ${llave}. Valor: ${valor}`);
}

const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];

console.log(llavesMapa2);
console.log(valoresMapa2);

console.clear();
/*WeakSets y WeakMaps */

/*lanza error */
// const ws = new WeakSet([
//   1,
//   2,
//   3,
//   3,
//   4,
//   5,
//   true,
//   false,
//   false,
//   {},
//   {},
//   "hola",
//   "HoLa",
// ]);
// const ws = new WeakSet();
// let valor1 = { "Valor 1": 1 };
// let valor2 = { "Valor 2": 2 };
// let valor3 = { "Valor 3": 3 };

// ws.add(valor1);
// ws.add(valor2);

// console.log(ws);
// console.log(ws.has(valor1));
// console.log(ws.has(valor3));

// ws.delete(valor2);
// // console.log(ws);

// ws.add(valor2);
// ws.add(valor3);
// // console.log(ws);

// setInterval(() => {
//   console.log(ws);
// }, 10000);

// setTimeout(() => {
//   (valor1 = null), (valor2 = null), (valor3 = null);
// }, 500);
