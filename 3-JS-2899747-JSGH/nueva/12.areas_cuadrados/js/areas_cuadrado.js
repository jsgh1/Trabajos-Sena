/**
 * Funcion de areas de tres cuadrados
 * Martin Stiben Narvaez
 * Martes 02 de Abril del 2024
 */

function areaCuad(plado){
    let lado=plado;
    let cuadrado=lado*lado;
    return cuadrado;
}

function areasComp(parea1,parea2,parea3){
    let area1=parea1;
    let area2=parea2;
    let area3=parea3;

    if(area1==area2&&area2==area3){
        return "El area de todos los cuadrados es la misma";
    }else if(area1>area2&&area2>area3){
        return "El area del cuadrado 1 es mayor";
    }else if(area1<area2&&area2>area3){
        return "El area del cuadrado 2 es mayor";
    }else{
        return "El area del cuadrado 3 es mayor";
    }

}

const areaCuadExp=function(plado){
    let lado=plado;
    let cuadrado=lado*lado;
    return cuadrado;
}

const areasCompExp=function(parea1,parea2,parea3){
    let area1=parea1;
    let area2=parea2;
    let area3=parea3;

    if(area1==area2&&area2==area3){
        return "El area de todos los cuadrados es la misma";
    }else if(area1>area2&&area2>area3){
        return "El area del cuadrado 1 es mayor";
    }else if(area1<area2&&area2>area3){
        return "El area del cuadrado 2 es mayor";
    }else{
        return "El area del cuadrado 3 es mayor";
    }
}