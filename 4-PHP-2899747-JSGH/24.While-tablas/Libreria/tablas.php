<?php
/**
 * Ejercicio de las tablas 
 * Martin Stiben Narvaez
 * Martes 02 de Mayo del 2024
 */

 $numero1 = 0;
 $pares = 0;
 $impares = 0;
 
 while ($numero1 <= 5) {
     $numero2 = 1;
     $numero1++;
     while ($numero2 <= 5) {
         $respuesta = $numero1 * $numero2;
         if ($respuesta % 2 == 0) {
             echo "$numero1 * $numero2 = $respuesta Buzz <br>";
             $pares++;
         } else {
             echo "$numero1 * $numero2 = $respuesta Bass <br>";
             $impares++;
         }
         $numero2++;
     }
 }
 
 echo "Cantidad de pares: $pares\n";
 echo "Cantidad de impares: $impares\n";
?>