<?php
/**
 * Funcion de el area de un triangulo, un rectangulo y un cuadrado
 * Martin Stiben Narvaez
 * Martes 14 de Mayo del 2024
 */

 function figuras($Pfigura,$Pbase,$Paltura){
    $figura=$Pfigura;
    $base=$Pbase;
    $altura=$Paltura;
    if($figura=="triangulo"){
        $area=$base*$altura/2;
        return $area;
    }else if($figura=="rectangulo"){
        $area=$base*$altura;
        return $area;
    }else if($figura=="cuadrado"){
        $area=$base*$base;
        return $area;
    }
 }
 ?>