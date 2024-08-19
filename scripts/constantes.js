export const PI = Math.PI;
export let nombre = "Alex";
const password = "qwerty";

// export default password;

export function saludar() {
  console.log(`Hola módulos +ES6`);
}

export const saludo = () => {
  console.log(`Hola`);
};
// export default saludo;

export default class Saludar {
  constructor() {
    console.log(`Hola módulos desde +ES6. Clase`);
  }
}
