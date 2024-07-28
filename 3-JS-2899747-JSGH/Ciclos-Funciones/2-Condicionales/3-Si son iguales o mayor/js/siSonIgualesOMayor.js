/**
 * funcion de si dos numeros son iguales o cual es el mayor
 * Autor: Martin Stiben Narvaez
 * Miercoles 10 de Abril del 2024
*/

function numeros(pnumero1,pnumero2){
    let numero1 = pnumero1;
    let numero2 = pnumero2;

    if(numero1==numero2){
        return "Los numeros " +numero1+ " y " +numero2+ " Son iguales";
    }else if(numero1>numero2){
        return "El numero " +numero1+ " Es mayor que " +numero2;
    }else{
        return "El numero " +numero2+ " Es mayor que " +numero1;
    }
}
const numerosExp=function(pnumero1,pnumero2){
    let numero1 = pnumero1;
    let numero2 = pnumero2;

    if(numero1==numero2){
        return "Los numeros " +numero1+ " y " +numero2+ " Son iguales";
    }else if(numero1>numero2){
        return "El numero " +numero1+ " Es mayor que " +numero2;
    }else{
        return "El numero " +numero2+ " Es mayor que " +numero1;
    }
}