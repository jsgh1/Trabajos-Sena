/**
Funcion de el promedio de tres notas
Martin Stiben Narvaez
Lunes 17 de Junio del 2024
*/

function promedio(){

    let nota1 = parseInt(document.getElementById('txtnota1').value);
    let nota2 = parseInt(document.getElementById('txtnota2').value);
    let nota3 = parseInt(document.getElementById('txtnota3').value);
    
    let suma = nota1 + nota2 + nota3;
    let promedio = suma / 3;
    
    document.getElementById('promedio').innerHTML = "<strong>Promedio: " + promedio.toFixed(2) + "</strong>";
}