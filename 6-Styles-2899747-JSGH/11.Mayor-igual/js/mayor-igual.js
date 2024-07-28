/**
Funcion de dos numero y cual es mayor o si son iguales
Martin Stiben Narvaez
Lunes 17 de Junio del 2024
*/

function numeros(){
    let numero1;
    let numero2;
    numero1 = document.getElementById('txtnumero1').value;
    numero2 = document.getElementById('txtnumero2').value;
    let retorno;
    if(numero1 == numero2){
        retorno = "Los numeros son iguales";
    }else if(numero1 > numero2){
        retorno = "El numero 1 es mayor";
    }else{
        retorno = "El numero 2 es mayor";
    }
    document.getElementById('retorno').innerText = retorno;
}