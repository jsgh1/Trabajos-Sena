
/**
 * Matriz y bingo
 * Martin Stiben Narvaez
 * Lunes 29 de abril del 2024
 */

let matriz=[];
let matriz1=[];
let matriz2=[];
let matriz3=[];
let numero=1;

for(let fila=0;fila<5;fila++){
    matriz[fila]=[]
    for(let columna=0;columna<5;columna++){
        matriz[fila][columna]=numero *2;
        numero++;
}
}

console.log("B"+"\n"+"\n");
for(let fila = 0; fila < 5; fila++) {
    console.log(matriz[fila][0]);
}

console.log("I"+"\n"+"\n");
for(let fila = 0; fila < 5; fila++) {
    console.log(matriz[fila][1]);
}

console.log("N"+"\n"+"\n");
for(let fila = 0; fila < 5; fila++) {
    console.log(matriz[fila][2]);
}

console.log("G"+"\n"+"\n");
for(let fila = 0; fila < 5; fila++) {
    console.log(matriz[fila][3]);
}

console.log("O"+"\n"+"\n");
for(let fila = 0; fila < 5; fila++) {
    console.log(matriz[fila][4]);
}

for(let fila=0;fila<3;fila++){
for(let columna=0;columna<3;columna++){
    if(fila==columna || fila+columna==2){
        matriz1.push(matriz[fila][columna]);
    }
}
}

for(let fila=2;fila<5;fila++){
for(let columna=0;columna<3;columna++){
    if(fila+columna==(columna+1)*2 || fila+columna==4){
        matriz2.push(matriz[fila][columna]);
    }

}
}

for(let fila=0; fila<3;fila++){
for(let columna=2; columna<5;columna++){
    if(columna+fila==(fila+1)*2||fila+columna==4){
        matriz3.push(matriz[fila][columna]);
    }
}
}



console.log(matriz);
console.log(matriz1);
console.log(matriz2);
console.log(matriz3);