/**
 * Funcion de tres notas
 * Martin Stiben Narvaez
 * Martes 02 de Abril del 2024
 */

function nota(pnota,pporcentaje){
    let nota=pnota;
    let porcentaje=pporcentaje;
    let operacion=nota*porcentaje;
    return operacion;
}

function suma(pporcentaje1,pporcentaje2,pporcentaje3){
    let porcentaje1=pporcentaje1;
    let porcentaje2=pporcentaje2;
    let porcentaje3=pporcentaje3;
    let suma;
    suma=porcentaje1+porcentaje2+porcentaje3;
    if(suma>4.5){
        return "La nota es superior"
    }else if(suma>3.5){
        return "La nota es buena";
    }else if(suma>3){
        return "La nota es media";
    }else{
        return "La nota es mala";
    }
}

const notaExp=function(pnota,pporcentaje){
    let nota=pnota;
    let porcentaje=pporcentaje;
    let operacion=nota*porcentaje;
    return operacion;
}

const sumaExp=function(pporcentaje1,pporcentaje2,pporcentaje3){
    let porcentaje1=pporcentaje1;
    let porcentaje2=pporcentaje2;
    let porcentaje3=pporcentaje3;
    let suma;
    suma=porcentaje1+porcentaje2+porcentaje3;
    if(suma>4.5){
        return "La nota es superior"
    }else if(suma>3.5){
        return "La nota es buena";
    }else if(suma>3){
        return "La nota es media";
    }else{
        return "La nota es mala";
    }
}
