/**
 * function de la edad de tres areas
 * Autor: Martin Stiben Narvaez
 * Miercoles 10 de Abril del 2024
*/

function edades(pedad1,pedad2,pedad3){
    let edad1 = pedad1;
    let edad2 = pedad2;
    let edad3 = pedad3;
    let suma;
    suma = edad1 + edad2 + edad3;

    if(edad1==edad2 && edad2==edad3 && edad3==edad1){
        console.log("las edades " +edad1+","+edad2+" y "+edad3+ " son iguales");
    }else if(edad1>edad2 && edad2>edad3){
        console.log("La edad "+edad1+" es mayor");
    }else if(edad1<edad2 && edad2>edad3){
        console.log("La edad "+edad2+" es mayor");
    }else {
        console.log("La edad "+edad3+" es mayor");
    }
    
    if(suma>17){
        return "la suma de las edades es: "+suma+" y cumple con la mayoria de edad";
    }else{
        return "la suma de las edades es: "+suma+" y no cumple con la mayoria de edad";
    }
}

const edadesExp=function(pedad1,pedad2,pedad3){
    let edad1 = pedad1;
    let edad2 = pedad2;
    let edad3 = pedad3;
    let suma;
    suma = edad1 + edad2 + edad3;

    if(edad1==edad2 && edad2==edad3 && edad3==edad1){
        console.log("las edades " +edad1+","+edad2+" y "+edad3+ " son iguales");
    }else if(edad1>edad2 && edad2>edad3){
        console.log("La edad "+edad1+" es mayor");
    }else if(edad1<edad2 && edad2>edad3){
        console.log("La edad "+edad2+" es mayor");
    }else {
        console.log("La edad "+edad3+" es mayor");
    }
    
    if(suma>17){
        return "la suma de las edades es: "+suma+" y cumple con la mayoria de edad";
    }else{
        return "la suma de las edades es: "+suma+" y no cumple con la mayoria de edad";
    }
}