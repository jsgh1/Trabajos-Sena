<?php
/**
 * Funcion de edad con la fecha de nacimiento si es mayoro menor de edad
 * Martin Stiben Narvaez
 * Martes 14 de Mayo del 2024
 */

 function edad($Pfecha){
    $fecha=$Pfecha;
    $hoy=2024;
    $edad=$hoy-$fecha;

    if($edad > 17){
        echo "Es mayor de edad <br>";
    }else{
        echo "Es menor de edad <br>";
    }
    return $edad;
 }
?>