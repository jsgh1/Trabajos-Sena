<?php
/**
 * Funcion de si es mayor de edad
 * Martin Stiben Narvaez
 * Martes 02 de Abril del 2024
 */

function edad($Pedad){
    $edad=$Pedad;
    if($edad>17){
        $resultado="Es mayor de edad";
    }else{
        $resultado= "Es menor de edad";
    }
    return $resultado;
}