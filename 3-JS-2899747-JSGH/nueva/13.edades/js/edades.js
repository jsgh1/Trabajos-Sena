/**
 * Funcion de calcular si tres edades son iguales o cual es mayor
 * Martin Stiben Narvaez
 * Martes 02 de Abril del 2024
 */

function edades(pedad1,pedad2,pedad3){
    let edad1=pedad1;
    let edad2=pedad2;
    let edad3=pedad3;
    if(edad1==edad2&&edad2==edad3){
        return "Las edades son iguales";
    }else if(edad1>edad2&&edad2>edad3){
        return "La edad: "+edad1+" es la edad mas grande";
    }else if(edad1<edad2&&edad2>edad3){
        return "La edad: "+edad2+" es la edad mas grande";
    }else{
        return "La edad: "+edad3+" es la edad mas grande";
    }
}

const edadesExp=function(pedad1,pedad2,pedad3){
    let edad1=pedad1;
    let edad2=pedad2;
    let edad3=pedad3;
    if(edad1==edad2&&edad2==edad3){
        return "Las edades son iguales";
    }else if(edad1>edad2&&edad2>edad3){
        return "La edad: "+edad1+" es la edad mas grande";
    }else if(edad1<edad2&&edad2>edad3){
        return "La edad: "+edad2+" es la edad mas grande";
    }else{
        return "La edad: "+edad3+" es la edad mas grande";
    }
}
