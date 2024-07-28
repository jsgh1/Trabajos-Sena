/**
 * Funcion de areas de tres figuras
 * Autor: Martin Stiben Narvaez
 * Viernes 05 de Abril del 2024
 */

function areasFiguras(poperador, pbase, paltura){
    let operador = poperador
    let base = pbase;
    let altura = paltura;
    let operacion;

    if (operador = "cuadrado") {
        operacion = base * altura;
        return operacion;
    } else if (operador = "triangulo") {
        operacion = (base * altura)/2
        return operacion;
    } else if (operador = "rectangulo"){
        operacion = base * altura;
        return operacion;
    }
}

const areasFigurasExp=function(poperador,pbase,paltura){
    let operador = poperador;
    let base = pbase;
    let altura = paltura;
    let operacion;

    if (operador = "cuadrado") {
        operacion = base * altura;
        return operacion;
    } else if (operador = "rectangulo") {
        operacion = base * altura;
        return operacion;
    } else if (operador = "triangulo") {
        operacion = (base * altura)/2
        return operacion;
    }
}