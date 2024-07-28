<?php
/**
 * ejercicio de par o impar de while
 * Martin Stiben Narvaez
 * Martes 02 de Mayo del 2024
 */

 $numero=0;

 while($numero<=5){
    $numero++;
    if($numero%2==0){
        echo $numero." Par <br>";
    }else{
        echo $numero." impar <br>";
    }
 }
?>