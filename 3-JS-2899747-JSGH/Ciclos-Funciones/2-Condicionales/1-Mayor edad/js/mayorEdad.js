/**
 * Funcion de mayor de edad
 * Autro : Martin Stiben Narvaez
 * Miercoles 10 de Abril del 2024
*/

function edad(pedad){
    let numeroEdad=pedad;
    if(numeroEdad>17){
        return numeroEdad+" Es mayor de edad";
    }else{
        return numeroEdad+" Es menor de edad";
    }
}

const edadExp=function(pedad){
    let edad=pedad;
    if(edad>17){
        return edad+" Tu edad cumple con la mayoria de edad";
    }else{
        return edad+" Tu edad no cumple con la mayoria de edad";
    }
}