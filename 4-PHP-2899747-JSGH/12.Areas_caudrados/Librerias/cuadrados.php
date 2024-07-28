<?php
/**
 * Ejercicio de el area de tres cuadrados y cual es mayor
 * Martin Stiben Narvaez
 * Martes 07 de Mayo del 2024
 */

 $lado1=10;
 $lado2=20;
 $lado3=30;
 $area1=$lado1*$lado1;
 $area2=$lado2*$lado2;
 $area3=$lado3*$lado3;
 if($area1==$area2 && $area3==$area2){
    $mayor="los tres cuadrados tienen la misma area";
 }else if($area1>$area2 && $area1>$area3){
    $mayor="El area del cuadrado 1 es mayor";
 }elseif($area2>$area1 && $area2>$area3){
    $mayor="El area del cuadrado 2 es mayor";
 }elseif($area3>$area1 && $area3>$area2){
    $mayor="El area del cuadrado 3 es mayor";
 }
?>