/**
Funcion de sumar
Martin Stiben Narvaez
Lunes 17 de Junio del 2024
*/


function suma(){

    let numeroUno = parseInt(document.getElementById('txtNumeroUno').value);
    let numeroDos = parseInt(document.getElementById('txtNumeroDos').value);

    let resultado = numeroUno + numeroDos;

    document.getElementById('resultado').innerHTML = "<strong>" + resultado + "</strong>";

    return false;
}                                                    