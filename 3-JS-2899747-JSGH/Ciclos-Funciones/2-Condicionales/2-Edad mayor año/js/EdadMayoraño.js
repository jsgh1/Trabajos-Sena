/**
 * Funcion de edad por el año
 * Autor: Martin Stiben Narvaez
 * Miercoles 10 de Abril del 2024
*/

function edad(pfechaNacimiento,pfechaActual){
    let fechaNacimiento = pfechaNacimiento;
    let fechaActual = pfechaActual;
    let edadAct;
    edadAct = fechaActual - fechaNacimiento;
    if (edadAct>17){
        return edadAct+ " Es Mayor de edad";
    } else {
        return edadAct+ " Es menor de edad";
    }
}

const edadExp=function(pnacimiento,pactualidad){
    let nacimiento=pnacimiento;
    let actualidad=pactualidad;
    let edad;
    edad = actualidad-nacimiento;
    if(edad>17){
        return edad+" Tu eres mayor de edad";
    }else{
        return edad+" Tu eres menor de edad";
    }
}