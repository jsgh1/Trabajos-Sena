<?php
/**
 * Array en una forma de x
 * Martin Stiben Narvaez
 * Martes 07 de Mayo del 2024
 */

 $matriz5 = [];

 for ($fila = 0; $fila < 5; $fila++) {
     $matriz5[$fila] = [];
     for ($columna = 0; $columna < 5; $columna++) {
         $numero = rand(1, 100); // Generar un número aleatorio entre 1 y 100
         $matriz5[$fila][$columna] = $numero;
     }
 }
 
 $matrizX = "";
 
 for ($filaX = 0; $filaX < 5; $filaX++) {
     for ($columnaX = 0; $columnaX < 5; $columnaX++) {
         if ($filaX === $columnaX || $filaX + $columnaX === 4) {
             $matrizX .= $matriz5[$filaX][$columnaX] . " ";
         } else {
             $matrizX .= " ";
         }
     }
     $matrizX .= "<br>";
 }

?>