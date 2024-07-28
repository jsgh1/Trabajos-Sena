/**
Funcion de como contar hasta 5 con while
Martin Stiben Narvaez
Lunes 17 de Junio del 2024
*/

function imprimir() {
    let numero1;
    numero1 = document.getElementById('txtnumero1').value;
    let i = 1;
    let acomularNumeros = "";

    while(i <= numero1) {
        acomularNumeros +=  i + " ";
        i++;
    }

    document.getElementById('numero').innerHTML = acomularNumeros;

}