/**
Funcion de el porcentaje de tres notas la suma y si la suma encaja en alguna de los rangos
Martin Stiben Narvaez
Lunes 17 de Junio del 2024
*/


function notas(){
    let nota1;
    let nota2; 
    let nota3;
    nota1 = document.getElementById('txtnota1').value;
    nota2 = document.getElementById('txtnota2').value;
    nota3 = document.getElementById('txtnota3').value;
    let porcentaje1 = nota1 * 0.20;
    let porcentaje2 = nota2 * 0.35;
    let porcentaje3 = nota3 * 0.45;
    let suma = porcentaje1 + porcentaje2 + porcentaje3;
    let rango;
    if(suma > 4.5){
        rango = "La nota es superior";
    }else if(suma > 3.5){
        rango = "La nota es buena";
    }else if(suma > 3){
        rango = "La nota es regular";
    }else{
        rango = "La nota es mala";
    }
    document.getElementById('porcentaje1').innerHTML = "<strong> El porcentaje de la nota 1 es: " + porcentaje1.toFixed(2) + "</strong>";
    document.getElementById('porcentaje2').innerHTML = "<strong> El porcentaje de la nota 2 es: " + porcentaje2.toFixed(2) + "</strong>";
    document.getElementById('porcentaje3').innerHTML = "<strong> El porcentaje de la nota 3 es:" + porcentaje3.toFixed(2) + "</strong>";
    document.getElementById('suma').innerHTML = "<strong> La suma de los porcentajes es: " + suma.toFixed(2) + "</strong>";
    document.getElementById('rango').innerHTML = "<strong>" + rango + "</strong>";
}