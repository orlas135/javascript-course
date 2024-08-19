import Saludar, { PI, nombre, saludo, saludar } from "./constantes.js";
import { aritmetica as calculos } from "./aritmetica.js";

console.log(PI);
console.log(nombre);

console.log(calculos.sumar(3, 8));
console.log(calculos.restar(9, 8));
saludar();
saludo();

let clase = new Saludar();

console.log(typeof clase);
