/**
 * Funcion de operaciones 
 * Martin Stiben Narvaez
 * Martes 02 de Abril del 2024
 */

function resta(pnum1,pnum2){
    let num1=pnum1;
    let num2=pnum2;
    let restar=num1-num2;
    return restar;
}

function multiplicacion(pnum1,pnum2){
    let num1=pnum1;
    let num2=pnum2;
    let multiplicar=num1*num2;
    return multiplicar;
}

function division(pnum1,pnum2){
    let num1=pnum1;
    let num2=pnum2;
    let dividir=num1/num2;
    return dividir;
}

function operacion(ptexto,pnum1,pnum2){
    let texto=ptexto;
    let pnum1=pnum1;
    let pnum2=pnum2;
    if(texto=="resta"){
        resultado=resta(pnum1,pnum2);
    }else if(texto=="multiplicar"){
        resultado=multiplicacion(pnum1,pnum2);
    }else if(texto=="division"){
        resultado=division(pnum1,pnum2);
    }else{
        resultado="Error";
    }
    return resultado;
}