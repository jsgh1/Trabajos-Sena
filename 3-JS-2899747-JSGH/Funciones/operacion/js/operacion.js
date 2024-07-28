/**
 * operacion como exprecion
 * autor Martin Stiben Narvaez
 * Lunes 01 de abril del 2024
 */

let numero1;
let numero2;

const suma=function(pnumero1, pnumero2){
    let sumar;
    numero1= pnumero1;
    numero2= pnumero2;
    sumar=numero1+numero2;
    return sumar;
}
const resta=function(pnumero1,pnumero2){
    let restar;
    numero1=pnumero1;
    numero2=pnumero2;
    restar=numero1-numero2;
    return restar;
}
const multiplicacion=function(pnumero1,pnumero2){
    let multiplicar;
    numero1=pnumero1;
    numero2=pnumero2;
    multiplicar=numero1*numero2;
    return multiplicar;
}

const operacion=function(operador,pnumero1,pnumero2){
    let operador;
    let operacionresultado;
    numero1=pnumero1;
    numero2=pnumero2;

    if (operador="suma") {
        operacionresultado = numero1+numero2;
    }
    
}