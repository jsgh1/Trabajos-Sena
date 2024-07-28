/**
Funcion de calcular la edad y si es mayor o menor por año de nacimiento
Martin Stiben Narvaez
Lunes 17 de Junio del 2024
*/

function edad(){
    let nacimiento;
    nacimiento = document.getElementById('txtnacimiento').value;
    let hoy = 2024;
    let nEdad = hoy - nacimiento;
    let rango;
    if(nEdad>17){
        rango = nEdad + " Es mayor de edad";
    }else{
        rango = nEdad + " Es menor de edad";
    }
    document.getElementById('rango').innerText = rango ;
}