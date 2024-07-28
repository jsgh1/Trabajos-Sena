/**
 * Funcion de operaciones
 * Martin Stiben Narvaez
 * Martes 02 de Abril del 2024
 */


let pnum1
let pnum2

const restaExp=function(pnum1,pnum2){
    let restar;
    pnum1 = pnum1;
    pnum2 = pnum2;
    restar = pnum1 - pnum2;
    return restar;
}

const multiplicacionExp=function(pnum1,pnum2){
    let multiplicar;
    pnum1 = pnum1;
    pnum2 = pnum2;
    multiplicar = pnum1 * pnum2;
    return multiplicar;
}

const divisionExp=function(pnum1,pnum2){
    let dividor;
    pnum1 = pnum1;
    pnum2 = pnum2;
    dividor = pnum1 / pnum2;
    return dividor;
}

const operacionExp = function(poperador,pnum1,pnum2){
    let operador = poperador;
    pnum1 = pnum1;
    pnum2 = pnum2;
     if (operador == "resta") {
        operacionResultado = restaExp(pnum1,pnum2);
     }else if (operador == "multiplicacion") {
        operacionResultado = multiplicacionExp(pnum1,pnum2);
     }else if (operador == "division") {
        operacionResultado = divisionExp(pnum1,pnum2);
     }else{
        operacionResultado = "Error!!! no se puede operar";
     }
     return operacionResultado;
}


function resta(pnum1,pnum2){
    let restar;
    pnum1 = pnum1;
    pnum2 = pnum2;
    restar=pnum1-pnum2;
    return restar;
}

function multiplicacion(pnum1,pnum2){
    let multiplicar;
    pnum1 = pnum1;
    pnum2 = pnum2;
    multiplicar=pnum1*pnum2;
    return multiplicar;
}

function division(pnum1,pnum2){
    let dividir;
    pnum1 = pnum1;
    pnum2 = pnum2;
    dividir=pnum1/pnum2;
    return dividir;
}

function operacion(poperador,pnum1,pnum2){
    let operador=poperador;
    pnum1 = pnum1;
    pnum2 = pnum2;
    if(operador=="resta"){
        resultado=resta(pnum1,pnum2);
    }else if(operador=="multiplicacion"){
        resultado=multiplicacion(pnum1,pnum2);
    }else if(operador=="division"){
        resultado=division(pnum1,pnum2);
    }else{
        resultado="Error";
    }
    return resultado;
}