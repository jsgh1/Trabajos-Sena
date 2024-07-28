/**
Funcion de saludo
Martin Stiben Narvaez
Lunes 17 de Junio del 2024
*/

function saludo(){
    let saludar;

    saludar = document.getElementById('txtSaludo').value;

    document.getElementById('saludo').innerHTML = '<strong>'+ saludar +'</strong>';

    return false;
}