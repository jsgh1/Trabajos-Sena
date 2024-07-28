/**
Funcion de el porcentaje de un numero
Martin Stiben Narvaez
Lunes 17 de Junio del 2024
*/

function porcentaje(){

    let numero;
    numero = document.getElementById('txtporcentaje').value;

    let porcentaje = numero / 100;

    document.getElementById('porcentaje').innerHTML = "<strong>" + porcentaje + "<strong>";

    return false;
}