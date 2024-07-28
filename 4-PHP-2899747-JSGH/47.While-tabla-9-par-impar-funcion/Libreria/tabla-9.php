<?php
/**
 * Funcion de tabla del 9 con par e impar
 * Martin Stiben Narvaez
 * Martes 07 de Mayo del 2024
 */

 function contar($prespuesta){
    $respuesta=$prespuesta;
    if($respuesta%2==0){
        return "$respuesta par";
    }else{
        return "$respuesta impar";
    }
 }
?>