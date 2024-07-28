<?php
/**
 * Ejercicio de sueldo
 * Martin Stiben Narvaez
 * Martes 02 de Mayo del 2024
 */

 $salarioMin=1300000;
$diasTrabajados=45;
$pagoDia=130000;
$sueldo=$pagoDia*$diasTrabajados;
$salario=$pagoDia*$diasTrabajados;
$subTransporte=120000;

if($salario>$salarioMin*2){
    $salario=$salario+$subTransporte;
}else{
    $salario=$salario+0;
}

$salud=$salario*0.12;
$pension=$salario*0.16;
$arl=$salario*0.052;
$deducible=$salud+$pension+$arl;

if($salario>$salarioMin*4){
    $salario=$salario*0.04;
}else{
    $salario=$salario+0;
}

$pago=$deducible-$salario;

?>