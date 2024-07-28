<?php
/**
 * Funcion de edades
 * Martin Stiben Narvaez
 * Martes 07 de Mayo del 2024
 */

 function edad($pedad){
    $edad=$pedad;
    if($edad>17){
        return "Su edad ($edad) es mayor de edad";
    }else{
        return "Su edad ($edad) es menor de edad";
    }
 }

 function promedio($pedad1,$pedad2,$pedad3){
    $edad1=$pedad1;
    $edad2=$pedad2;
    $edad3=$pedad3;
    $suma=$edad1+$edad2+$edad3;
    $promedio=$suma/3;
    if($promedio>17){
        return "El promedio de las edades es mayor de edad";
    }else{
        return "El promedio de las edades es menor de edad";
    }
 }
?>