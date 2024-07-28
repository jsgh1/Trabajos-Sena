<?php
/**
 * Funcion de la calificacion de una nota
 * Martin Stiben Narvaez
 * Martes 07 de Mayo del 2024
 */

 function notas($pnota1,$pnota2,$pnota3){
    $nota1=$pnota1;
    $nota2=$pnota2;
    $nota3=$pnota3;
    $porcentaje1=$nota1*(20/100);
    $porcentaje2=$nota2*(30/100);
    $porcentaje3=$nota3*(45/100);
    $suma=$porcentaje1+$porcentaje2+$porcentaje3;
    if($suma>4.5){
        return "Su nota es superior";
    }else if($suma>3.5){
        return "Su nota es buena";
    }else if($suma>3){
        return "Su nota es media";
    }else{
        return "Su nota es mala";
    }
 }
?>