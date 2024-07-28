/**
 * Matriz
 * Martin Stiben Narvaez
 * Lunes 29 de abril del 2024
 */

        let matriz5 = [];
   
        for (let fila = 0; fila < 5; fila++) {
            matriz5[fila] = []; 
            for (let columna = 0; columna < 5; columna++) {
                let numero = Math.floor(Math.random() * 100) + 1;
                matriz5[fila][columna] = numero;
            }
        }  
        console.log("Matriz generada:");
        console.log(matriz5);

        let matrixX = ""; 

        for (let filaX = 0; filaX < 5; filaX++) {
            for (let columnaX = 0; columnaX < 5; columnaX++) {
                if (filaX === columnaX || filaX + columnaX === 4) {
                    matrixX += matriz5[filaX][columnaX] + "\t";
                } else {
                    matrixX += " \t";
                }
            }
            matrixX += "\n";
        }

        console.log("Matriz en forma de X:");
        console.log(matrixX);