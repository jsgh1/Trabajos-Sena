<?php
/**
 * Ejercicio de el pago total de una persona
 * Martin Stiben Narvaez
 * Martes 07 de Mayo del 2024
 */

$diasTrabajados=45;
$valorPorDia=450000;
$salario=$diasTrabajados*$valorPorDia;
$salud=$salario*0.12;
$pension=$salario*0.16;
$arl=$salario*0.052;
$descuento=$salud+$pension+$arl;
$total_pagar=$salario-$descuento;
?>