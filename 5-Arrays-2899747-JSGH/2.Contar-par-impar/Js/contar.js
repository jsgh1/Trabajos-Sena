/**
 * Funcion de contar hasta 10 y cual es par e impar
 * Martin Stiben Narvaez
 * Martes 02 de Mayo del 2024
 */

let array = [];
for (let iterar = 0; iterar < 10; iterar++) {
  array[array.length] = iterar + 1;
}

let pares = [];
let impares = [];

for (let iterar = 0; iterar < array.length; iterar++) {
  if (array[iterar] % 2 === 0) {
    pares[pares.length] = array[iterar];
  } else {
    impares[impares.length] = array[iterar];
  }
}

console.log("Array contar hasta 10:", array);
console.log("Array de pares:", pares);
console.log("Array de impares:", impares);