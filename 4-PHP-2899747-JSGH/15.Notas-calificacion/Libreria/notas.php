<?php
/**
 * Ejercicio de notas y su respectiva calificacion
 * Martin Stiben Narvaez
 * Martes 02 de Mayo del 2024
 */

 $nota1=3.3;
 $nota2=4.4;
 $nota3=4.5;
 $porcentaje1=$nota1*(20/100);
 $porcentaje2=$nota2*(30/100);
 $porcentaje3=$nota3*(45/100);
 $suma=$porcentaje1+$porcentaje2+$porcentaje3;
 if($suma>4.5){
    $respuesta="superior";
 }else if($suma>3.5){
    $respuesta="buena";
 }else if($suma>3){
    $respuesta="media";
 }else{
    $respuesta="mala";
 }
?>