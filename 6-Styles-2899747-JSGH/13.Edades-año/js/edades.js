/**
Estilos de Edades promedio y si son mayores o menores de edad y si el promedio tambien es mayor de edad por el año
Martin Stiben Narvaez
Lunes 17 de Junio del 2024
*/

function edades(){
    let nacimiento1;
    let nacimiento2;
    let nacimiento3;
    nacimiento1 = document.getElementById('txtnacimiento1').value;
    nacimiento2 = document.getElementById('txtnacimiento2').value;
    nacimiento3 = document.getElementById('txtnacimiento3').value;
    let hoy = 2024;
    let nEdad1 = hoy - nacimiento1;
    let nEdad2 = hoy - nacimiento2;
    let nEdad3 = hoy - nacimiento3;
    let suma = nEdad1 + nEdad2 + nEdad3;
    let rango1;
    let rango2;
    let rango3;
    let rango4;
    if(nEdad1>17){
        rango1 = nEdad1 + " Es mayor de edad";
    }else{
        rango1 = nEdad1 + " Es menor de edad";
    }
    if(nEdad2>17){
        rango2 = nEdad2 + " Es mayor de edad";
    }else{
        rango2 = nEdad2 + " Es menor de edad";
    }
    if(nEdad3>17){
        rango3 = nEdad3 + " Es mayor de edad";
    }else{
        rango3 = nEdad3 + " Es menor de edad";
    }
    if(suma>17){
        rango4 = suma + " Es mayor de edad";
    }else{
        rango4 = suma + " Es menor de edad";
    }

    document.getElementById('rango1').innerText = rango1;
    document.getElementById('rango2').innerText = rango2;
    document.getElementById('rango3').innerText = rango3;
    document.getElementById('rango4').innerText = rango4;

}