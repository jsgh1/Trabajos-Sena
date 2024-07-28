/**
funcion de el porcentaje de tres notas y su suma
Martin Stiben Narvaez
Lunes 17 de Junio del 2024
*/

function porcentajeSuma(){
    let nota1;
    let nota2;
    let nota3;
    nota1 = document.getElementById('txtnota1').value;
    nota2 = document.getElementById('txtnota2').value;
    nota3 = document.getElementById('txtnota3').value;
    
    let porcentaje1 = nota1 * 0.30;
    let porcentaje2 = nota2 * 0.30;
    let porcentaje3 = nota3 * 0.40;
    let suma = porcentaje1 + porcentaje2 + porcentaje3;
    
    document.getElementById('porcentaje1').innerHTML = "<strong>Porcentaje nota 1: " + porcentaje1 + "</strong>";
    document.getElementById('porcentaje2').innerHTML = "<strong>Porcentaje nota 2: " + porcentaje2 + "</strong>";
    document.getElementById('porcentaje3').innerHTML = "<strong>Porcentaje nota 3: " + porcentaje3 + "</strong>";

    document.getElementById('suma').innerHTML = "<strong>Nota Final: " + suma + "</strong>";
}