/**
Funcion de las areas de tres cuadrados y cual es el area mayor o si todas son iguales
Martin Stiben Narvaez
Lunes 17 de Junio del 2024
*/

function cuadrados(){
    let lado1;
    let lado2;
    let lado3;
    lado1 = document.getElementById('txtlado1').value;
    lado2 = document.getElementById('txtlado2').value;
    lado3 = document.getElementById('txtlado3').value;
    let area1 = lado1 * lado1;
    let area2 = lado2 * lado2;
    let area3 = lado3 * lado3;
    let areas;
    if(area1 == area2 && area2 == area3){
        areas = "Las areas son iguales";
    }else if(area1 > area2 && area2 > area3){
        areas = "El area del cuadrado con " + lado1 + " de lado es mayor";
    }else if(area1 < area2 && area2 > area3){
        areas = "El area del cuadrado con " + lado2 + " de lado es mayor";
    }else{
        areas = "El area del cuadrado con " + lado3 + " de lado es mayor";
    }
    document.getElementById('areas').innerText = areas;
}