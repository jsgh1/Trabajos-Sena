<?php
/**
 * Ejercicio de tres edades para saber si son mayor o menor de edad ysi el promedio de las tres edades es mayor de edad
 * Martin Stiben Narvaez
 * Martes 07 de Mayo del 2024 
 */

 $año1=2009;
 $año2=2020;
 $año3=2018;
 $añoActual=2024;
 $edad1=$añoActual-$año1;
 $edad2=$añoActual-$año2;
 $edad3=$añoActual-$año3;
 $promedio=$edad1+$edad2+$edad3;
 $promedio=$promedio/3;
 if($edad1>17 && $edad2>17 && $edad3>17){
     $resultado="Es mayor de edad";
 }else{
     $resultado="Es menor de edad";
 }
?>