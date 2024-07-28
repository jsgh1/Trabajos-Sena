<?php
/**
 * Fumcion de mayor igual de numeros
 * Martin Stiben Narvaez
 * Martes 07 de Mayo del 2024
 */

 function comparar($pnum1,$pnum2){
    $num1=$pnum1;
    $num2=$pnum2;
    if($num1==$num2){
        return "el numero $num1 y el numero $num2 son iguales";
    }else if($num1>$num2){
        return "El numero $num1 es mayor a $num2";
    }else{
        return "El numero $num1 es mayor a $num1";
    }
}


?>