<?php
/**
 * Funcion de contar y cual es par e impar
 * Martin Stiben Narvaez
 * Martes 07 de Mayo del 2024
 */

 function contar($pinicio){
    $inicio=$pinicio;
    if($inicio%2==0){
        return "$inicio par";
    }else{
        return "$inicio impar";
    }
 }
?>