/**
 * Funcion de las tablas del 5 y 9 y sumar los pares e impares
 * Martin Stiben Narvaez
 * Martes 02 de Mayo del 2024
 */

let matriz5 = [];

let pares = [];
let impares = [];
let pares9 = [];
let impares9 = [];
let sumarPares = 0;
let sumarImpares = 0;
let sumarPares9 = 0;
let sumarImpares9 = 0;

for (let columna = 0; columna < 5; columna++) {
  matriz5[columna] = [];
  for (let fila = 0; fila < 5; fila++) {
    let tabla5 = (columna * 5 + fila + 1) * 5;
    matriz5[columna][fila] = tabla5;

    if (tabla5 % 2 === 0) {
      pares.push(tabla5);
      sumarPares += tabla5;
    } else {
      impares.push(tabla5);
      sumarImpares += tabla5;
    }
  }
}

let matriz9 = [];
for (let columna = 0; columna < 5; columna++) {
  matriz9[columna] = [];
  for (let fila = 0; fila < 5; fila++) {
    let tabla9 = (columna * 9 + fila + 1) * 9;
    matriz9[columna][fila] = tabla9;

    if (tabla9 % 2 === 0) {
      pares9.push(tabla9);
      sumarPares9 += tabla9;
    } else {
      impares9.push(tabla9);
      sumarImpares9 += tabla9;
    }
  }
}

console.log("Matriz de la tabla del 5:");
console.log(matriz5);
console.log("Números pares:");
console.log(pares);
console.log("Números impares:");
console.log(impares);
console.log("Suma de los números pares:", sumarPares);
console.log("Suma de los números impares:", sumarImpares+"\n"+"\n");
console.log("Matriz de la tabla del 9:");
console.log(matriz9);
console.log("Números pares:");
console.log(pares9);
console.log("Números impares:");
console.log(impares9);
console.log("Suma de los números pares:", sumarPares9);
console.log("Suma de los números impares:", sumarImpares9);
