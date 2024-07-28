<?php
/**
 * Funcion de porcentaje de tres notas y una funcion donde se sumen los porcentajes
 * Martin Stiben Narvaez
 * Martes 14 de Mayo del 2024
 */

 function porcentaje($pnum1,$pnum2,$pnum3){
    $num1=$pnum1;
    $num2=$pnum2;
    $num3=$pnum3;
    $porcentaje1=$num1*0.3;
    $porcentaje2=$num2*0.3;
    $porcentaje3=$num3*0.4;
    return $porcentaje1."<br>".$porcentaje2."<br>".$porcentaje3."<br>";
 }

 function suma($pnum1,$pnum2,$pnum3){
    $num1=$pnum1;
    $num2=$pnum2;
    $num3=$pnum3;
    $porcentaje1=$num1*0.02;
    $porcentaje2=$num2*0.03;
    $porcentaje3=$num3*0.45;
    $suma=$porcentaje1+$porcentaje2+$porcentaje3;
    return $suma;
 }
?>