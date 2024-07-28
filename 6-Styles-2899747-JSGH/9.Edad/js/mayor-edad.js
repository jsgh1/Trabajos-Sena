/**
Funcion de si la edad es mayor o menor de edad
Martin Stiben Narvaez
Lunes 17 de Junio del 2024
*/

function edad(){
    let nEdad;
    let rango;
    nEdad = document.getElementById('txtedad').value;
    if(nEdad>17){
        rango = nEdad + " Es mayor de edad";
    }else{
        rango = nEdad + " Es menor de edad";
    }
    document.getElementById('rango').innerText = rango ;
}