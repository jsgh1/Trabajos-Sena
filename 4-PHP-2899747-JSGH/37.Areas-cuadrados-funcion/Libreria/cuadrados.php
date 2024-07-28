<?php
/**
 * Funcion de el area de 3 cuadrados 
 * Martin Stiben Narvaez
 * Martes 07 de Mayo del 2024
 */

 function cuadrados($plado){
    $lado=$plado;
    $cuadrado=$lado*$lado;
    return $cuadrado;
 }

 function mayor($parea1,$parea2,$parea3){
    $area1=$parea1;
    $area2=$parea2;
    $area3=$parea3;
    if($area1==$area2 && $area2==$area3){
        return "Todas las areas son iguales";
    }else if($area1>$area2 && $area2>$area3){
        return "El area $area1 es mayor";
    }else if($area1<$area2 && $area2>$area3){
        return "El area $area2 es mayor";
    }else{
        return "El area $area3 es mayor";
    }
 }
?>