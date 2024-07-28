<?php
/**
 * Funcion de tablas y sumar pares e impares
 * Martin Stiben Narvaez
 * Martes 07 de Mayo del 2024
 */

 $matriz5 = [];

 $pares = [];
 $impares = [];
 $pares9 = [];
 $impares9 = [];
 $sumarPares = 0;
 $sumarImpares = 0;
 $sumarPares9 = 0;
 $sumarImpares9 = 0;
 
 for ($columna = 0; $columna < 5; $columna++) {
   $matriz5[$columna] = [];
   for ($fila = 0; $fila < 5; $fila++) {
     $tabla5 = ($columna * 5 + $fila + 1) * 5;
     $matriz5[$columna][$fila] = $tabla5;
 
     if ($tabla5 % 2 === 0) {
       $pares[] = $tabla5;
       $sumarPares += $tabla5;
     } else {
       $impares[] = $tabla5;
       $sumarImpares += $tabla5;
     }
   }
 }
 
 $matriz9 = [];
 for ($columna = 0; $columna < 5; $columna++) {
   $matriz9[$columna] = [];
   for ($fila = 0; $fila < 5; $fila++) {
     $tabla9 = ($columna * 9 + $fila + 1) * 9;
     $matriz9[$columna][$fila] = $tabla9;
 
     if ($tabla9 % 2 === 0) {
       $pares9[] = $tabla9;
       $sumarPares9 += $tabla9;
     } else {
       $impares9[] = $tabla9;
       $sumarImpares9 += $tabla9;
     }
   }
 }

?>