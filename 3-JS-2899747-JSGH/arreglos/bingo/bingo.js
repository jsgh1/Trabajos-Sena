/**
 * Bingo con arreglos
 * Martin Stiben Narvaez
 * Lunes 29 de Abril del 2024
 */

let bingo=[];
let acumular=0;

for(let iterar=0;iterar<5;iterar++){
    let interno=[];
    for(let iterar2=0;iterar2<5;iterar2++){
        acumular=acumular+1
        interno[iterar2]=acumular*2;
    }
    bingo[iterar]=interno;
}

console.log(bingo);