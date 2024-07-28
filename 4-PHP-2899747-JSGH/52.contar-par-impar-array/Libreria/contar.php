<?php
/**
 * Funcion de contar y cual es par e impar
 * Martin Stiben Narvaez
 * Martes 07 de Mayo del 2024
 */

 $array = [];
 for ($iterar = 0; $iterar < 10; $iterar++) {
   $array[] = $iterar + 1;
 }
 
 $pares = [];
 $impares = [];
 
 for ($iterar = 0; $iterar < count($array); $iterar++) {
   if ($array[$iterar] % 2 === 0) {
     $pares[] = $array[$iterar];
   } else {
     $impares[] = $array[$iterar];
   }
 }

?>