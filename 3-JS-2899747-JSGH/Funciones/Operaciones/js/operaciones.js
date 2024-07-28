/**
 * Funciones de operaciones aritmeticas
 * Autor Martin Stiben Narvaez
 * Lunes 01 abril del 2024 
 */
function suma(pnumero1, pnumero2){
    let numero1 = pnumero1;
    let numero2 = pnumero2;
    let sumar;
    sumar=numero1+numero2;
    return sumar + " Parametro";
}
function resta(pnumero1, pnumero2){
    let numero1 = pnumero1;
    let numero2 = pnumero2;
    let restar;
    restar=numero1-numero2;
    return restar + " Parametro";
}
function multiplicacion(pnumero1, pnumero2){
    let numero1 = pnumero1;
    let numero2 = pnumero2;
    let multiplicar;
    multiplicar=numero1*numero2;
    return multiplicar + " Parametro";
}
function division(pnumero1, pnumero2){
    let numero1 = pnumero1;
    let numero2 = pnumero2;
    let dividir;
    dividir=numero1/numero2;
    return dividir + " Parametro";
}

const sumaExp=function(pnumero1, pnumero2){
    let numero1 = pnumero1;
    let numero2 = pnumero2;
    let sumar;
    sumar=numero1+numero2;
    return sumar + " Constante";
}

const restaExp=function(pnumero1, pnumero2){
    let numero1 = pnumero1;
    let numero2 = pnumero2;
    let restar;
    restar = numero1 - numero2;
    return restar + " Constante"
}

const multiplicacionExp=function(pnumero1, pnumero2){
    let numero1 = pnumero1;
    let numero2 = pnumero2;
    let multiplicar;
    multiplicar = numero1 * numero2;
    return multiplicar + " Constante";
}

const divisionExp=function(pnumero1, pnumero2){
    let numero1=pnumero1;
    let numero2=pnumero2;
    let dividir;
    dividir=numero1/numero2;
    return dividir + " Constante";
}