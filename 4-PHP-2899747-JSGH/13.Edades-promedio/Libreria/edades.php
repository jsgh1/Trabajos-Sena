<?php
/**
 * Ejercicio de tres edades para saber si son mayor o menor de edad ysi el promedio de las tres edades es mayor de edad
 * Martin Stiben Narvaez
 * Martes 07 de Mayo del 2024 
 */

$nacio=2006;
$nacio2=2007;
$nacio3=2003;
$nacio4=2024;
$edad=$nacio4-$nacio;
$edad2=$nacio4-$nacio2;
$edad3=$nacio4-$nacio3;
$suma=$edad+$edad2+$edad3;
$promedio=$suma/3;

if($edad>17){
    $respuesta="Su edad (".$edad.") es mayor";
}else{
    $respuesta="Su edad en menor";
}

if($edad2>17){
    $respuesta2="Su edad (".$edad2.") es mayor";
}else{
    $respuesta2="Su edad (".$edad2.") es menor";
}

if($edad3>17){
    $respuesta3="Su edad (".$edad3.") es mayor";
}else{
    $respuesta3="Su edad (".$edad3.") es menor";
}

if($suma>17){
    $respuesta4="La suma de sus edades (".$suma.") cumple con la mayoria de edad";
}else{
    $respuesta4="La suma de sus edades (".$suma.") no cumple con la mayoria de edad";
}