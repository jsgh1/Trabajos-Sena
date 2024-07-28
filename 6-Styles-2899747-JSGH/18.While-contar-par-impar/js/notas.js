/**
Fucnion de como contar hasta 5 y cual es par e impar con while
Martin Stiben Narvaez
Lunes 17 de Junio del 2024
*/

function imprimir() {
    let numero1;
    numero1 = document.getElementById('txtnumero1').value;
    let i = 0;
    let acomularNumeros = "";

    while(i < numero1) {
        i++;
        if(i%2==0){
            acomularNumeros = acomularNumeros + i + " par ";
        }else{
            acomularNumeros = acomularNumeros + i + " impar ";
        }
    }

    document.getElementById('numero').innerHTML = acomularNumeros;

}