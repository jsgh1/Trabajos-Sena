/**
 * Funcion de la tabla del 9 y cual es par o impar 
 * Martin Stiben Narvaez
 * Martes 02 de Abril del 2024
 */

function tabla9(pinicio){
    let inicio=pinicio;
    inicio=inicio*9;
    if(inicio%2==0){
        return inicio+" par"
    }else{
        return inicio+" impar"
    }
}

const tabla9Exp=function(pinicio){
    let inicio=pinicio;
    inicio=inicio*9;
    if(inicio%2==0){
        return inicio+" par";
    }else{
        return inicio+" impar";
    }
}
