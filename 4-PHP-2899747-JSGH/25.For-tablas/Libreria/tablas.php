<?php
/**
 * Ejercicio de tablas
 * Martin Stiben Narvaez
 * Martes 02 de Mayo del 2024
 */

 $pares=0;
 $impares=0;
 for($numero1=1;$numero1<=5;$numero1++){
    for($numero2=1;$numero2<=5;$numero2++){
        $respuesta=$numero1*$numero2;
        if($respuesta%2==0){
            echo "$numero1*$numero2=$respuesta Buzz <br>";
            $pares++;
        }else{
            echo "$numero2*$numero2=$respuesta Bass <br>";
            $impares++;
        }
    }
 }
 echo "Cantidad de pares: $pares";
 echo "Cantidad de impares: $impares";
?>