/**
Funcion de como contar hasta 5 con For
Martin Stiben Narvaez
Lunes 17 de Junio del 2024
*/

function imprimir() {
    let numero1;
    numero1 = document.getElementById('txtnumero1').value;
    let acomularNumeros = "";

    for(let i = 1; i <= numero1; i++) {
        acomularNumeros +=  i + " ";
    }

    document.getElementById('numero').innerHTML = acomularNumeros;
}