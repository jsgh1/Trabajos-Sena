/**
 * Funcion de comparar dos numeros si son iguales o cual es mayor
 * Martin Stiben Narvaez
 * Martes 02 de Abril del 2024
 */

function comparar(pnum1,pnum2){
    let num1=pnum1;
    let num2=pnum2;
    if(num1==num2){
        return "el numero "+num1+" y el numero "+num2+" son iguales";
    }else if(num1>num2){
        return "El numero "+num1+" es mayor a "+num2;
    }else{
        return "El numero "+num2+" es mayor a "+num1;
    }
}


const compararExp=function(pnum1,pnum2){
    let num1=pnum1;
    let num2=pnum2;
    if(num1==num2){
        return "El numero "+num1+" y el numero "+num2+" son iguales";
    }else if(num1>num2){
        return "El numero "+num1+" es mayor a "+num2;
    }else{
        return "El numero "+num2+" es mayor a "+num1;
    }
}
