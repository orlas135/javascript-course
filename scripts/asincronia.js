/*El primer argumento es una función, o como se le dice técnicamente, callback */
/*El segundo argumento es el tiempo expresado en milisegundos */

// setTimeout(() => {
//   console.log(`Ejecutando el setTimeOut, solo se ejecuta una vez`);
// }, 5000);

// setInterval(() => {
//   console.log(`Esto se ejecuta cada dos segundos, se ejecuta infinitas veces`);
// }, 2000);

// setInterval((nombre = "Alexander") => {
//   console.log(`Hola ${nombre}`);
// }, 5000);

// setInterval(() => {
//   console.log(new Date().toLocaleTimeString());
// }, 1000);

// let temporizador = setTimeout(() => {
//   console.log(new Date().toLocaleTimeString());
// }, 5000);

// clearTimeout(temporizador);
// console.log(`Después de limpiar el temporizador UNO`);

// let temporizador_dos = setInterval(() => {
//   console.log(new Date().toLocaleTimeString());
// }, 5000);

// clearInterval(temporizador_dos);
// console.log(`Después de limpiar el temporizador DOS`);

// /*Código síncrono bloqueante */
// () => {
//   console.log("Código Síncrono");
//   console.log("Inicio");

//   function dos() {
//     console.log("Dos");
//   }

//   function uno() {
//     console.log("Uno");
//     dos();
//     console.log("Tres");
//   }

//   uno();
//   console.log(`Fin`);
// };

// /*Código asíncrono no bloqueante */
// () => {
//   console.log(`Código Asíncrono`);
//   console.log("Inicio");

//   function dos(params) {
//     setTimeout(() => {
//       console.log(`Dos`);
//     }, 1000);
//   }

//   function uno() {
//     setTimeout(() => {
//       console.log(`Uno`);
//     }, 0);
//     dos();
//     console.log("Tres");
//   }

//   uno();
//   console.log("Fin");
// };

// function cuadradoCallback(value, callback) {
//   setTimeout(() => {
//     callback(value, value * value);
//   }, 0 | (Math.random() * 1000));
// }

// cuadradoCallback(2, (value, result) => {
//   console.info(`Inicia Callback`);
//   console.log(`Callback: ${value} , ${result}`);
// });

// function cuadradoPromise(value) {
//   if (typeof value !== "number") {
//     return Promise.reject(
//       `Error, el valor "${value}" ingresado no es un número`
//     );
//   }
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         value,
//         result: value * value,
//       });
//     }, 0 | (Math.random() * 1000));
//   });
// }

// cuadradoPromise(0)
//   .then((obj) => {
//     console.log(`Inicia Promise`);
//     console.log(`Promise: ${obj.value} ${obj.result}`);
//     return cuadradoPromise(1);
//   })
//   .then((obj) => {
//     console.log(`Promise: ${obj.value} ${obj.result}`);
//     return cuadradoPromise("3");
//   })
//   .then((obj) => {
//     console.log(`Promise: ${obj.value} ${obj.result}`);
//     return cuadradoPromise(3);
//   })
//   .then((obj) => {
//     console.log(`Promise: ${obj.value} ${obj.result}`);
//     return cuadradoPromise(4);
//   })
//   .then((obj) => {
//     console.log(`Promise: ${obj.value} ${obj.result}`);
//     return cuadradoPromise(5);
//   })
//   .then((obj) => {
//     console.log(`Promise: ${obj.value} ${obj.result}`);
//     return console.log(`Fin`);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

function cuadradoPromise(value) {
  if (typeof value !== "number") {
    return Promise.reject(
      `Error, el valor "${value}" ingresado no es un número`
    );
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}

async function funcionAsincronaDeclarada(value) {
  try {
    console.log(`Inicio async function`);

    let obj = await cuadradoPromise(0);
    console.log(`Async function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(1);
    console.log(`Async function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(2);
    console.log(`Async function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise("3");
    console.log(`Async function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(4);
    console.log(`Async function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(5);
    console.log(`Async function: ${obj.value}, ${obj.result}`);

    console.log(`Fin de funcion async`);
  } catch (err) {
    console.error(err);
  }
}

funcionAsincronaDeclarada();

const funcionAsincronaExpresada = async () => {
  try {
    obj = await cuadradoPromise(6);
    console.log(`Async function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(7);
    console.log(`Async function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(8);
    console.log(`Async function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(9);
    console.log(`Async function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(10);
    console.log(`Async function: ${obj.value}, ${obj.result}`);

    console.log(`Fin de la función asíncrona expresada`);
  } catch (error) {
    console.error(err);
  }
};

funcionAsincronaExpresada();
