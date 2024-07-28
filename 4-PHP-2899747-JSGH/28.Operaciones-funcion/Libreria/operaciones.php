<?php
/**
 * Funcion de operaciones 
 * Martin Stiben Narvaez
 * Martes 02 de Mayo del 2024
 */

 function resta($num1,$num2){
    $num1=$num1;
    $num2=$num2;
    $resta=$num1-$num2;
    return $resta;
 }

 function milti($num1,$num2){
    $num1=$num1;
    $num2=$num2;
    $mult=$num1*$num2;
    return $mult;
 }

 function division($num1,$num2){
    $num1=$num1;
    $num2=$num2;
    $divi=$num1/$num2;
    return $divi;
 }

 function operaciones($operacion,$num1,$num2){
    $operacion=$operacion;
    $num1=$num1;
    $num2=$num2;
    if($operacion=="resta"){
        $resta=$num1-$num2;
        return $resta;
    }else if($operacion=="mult"){
        $multi=$num1*$num2;
        return $multi;
    }else if($operacion=="division"){
        $divi=$num1/$num2;
        return $divi;
    }else{
        return "no aidea";
    }
 }
?>