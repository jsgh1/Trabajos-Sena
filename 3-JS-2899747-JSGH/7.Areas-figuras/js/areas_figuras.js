/**
 * Funcion de areas de figuras geometricas
 * Martin Stiben Narvaez
 * Martes 02 de Abril del 2024
 */


function figuras(pFiguras,pBase,pAltura){
    let figuras=pFiguras;
    let base=pBase;
    let altura=pAltura;
    let operacion;
    if(figuras=="cuadrado"){
        operacion=base*base;
        return operacion;
    }else if(figuras=="rectangulo"){
        operacion=base*altura;
        return operacion;
    }else if(figuras=="triangulo"){
        operacion=(base*altura)/2;
        return operacion;
    }else{
        return "figura no encontrada";
    }
}

const figurasExp=function(pFiguras,pBase,pAltura){
    let figuras=pFiguras;
    let base=pBase;
    let altura=pAltura;
    let operacion;
    if(figuras=="cuadrado"){
        operacion=base*base;
        return operacion;
    }else if(figuras=="rectangulo"){
        operacion=base*altura;
        return operacion;
    }else if(figuras=="triangulo"){
        operacion=(base*altura)/2;
        return operacion;
    }else{
        return "figura no encontrada";
    }
}