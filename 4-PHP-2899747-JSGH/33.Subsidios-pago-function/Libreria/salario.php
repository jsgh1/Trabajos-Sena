<?php
/**
 * Funcion de los subsidio y el pago
 * Martin Stiben Narvaez
 * Martes 14 de Mayo del 2024
 */

 function subsidios($Psubsidios,$Pdias,$Pvdia){
    $subsidios=$Psubsidios;
    $dias=$Pdias;
    $vDia=$Pvdia;
    $salario=$vDia*$dias;
    if($subsidios=="Salud"){
        $salud=$salario*0.12;
        return $salud;
    }else if($subsidios== "Pension"){
        $pension=$salario*0.16;
        return $pension;
    }else if($subsidios== "Arl"){
        $arl=$salario*0.052;
        return $arl;
    }else{
        return "No hay subsidio";
    }
 }

 function pagoTotal($Pdias,$Pvdia){
    $dias=$Pdias;
    $vdia=$Pvdia;
    $salario=$dias*$vdia;
    $deducible=subsidios("Salud",$Pdias,$Pvdia)+subsidios("Pension",$Pdias,$Pvdia)+subsidios("Arl",$Pdias,$Pvdia);
    $pagoTot=$salario-$deducible;
    return $pagoTot;
}

?>