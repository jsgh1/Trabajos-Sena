/**
 * Funcion de edad con el año de nacimiento
 * Martin Stiben Narvaez
 * Martes 02 de Abril del 2024
 */

function edadFecha(pNacimiento){
    let nacimiento=pNacimiento;
    let actual=2024;
    let edad;
    edad=actual-nacimiento;
    if(edad>17){
        return "Edad: "+"("+edad+") "+"usted es mayor de edad";
    }else{
        return "Edad: "+"("+edad+") "+"usted es menor de edad";
    }
}


const edadFechaExp=function(pNacimiento){
    let nacimiento=pNacimiento;
    let actual=2024;
    let edad;
    edad =actual-nacimiento;
    if(edad>17){
        return "Edad: "+"("+edad+") "+"usted es mayor de edad";
    }else{
        return "Edad: "+"("+edad+") "+"usted es menor de edad";
    }
}