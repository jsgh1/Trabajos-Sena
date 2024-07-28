<?php
/**
 * Funcion del sueldo
 * Martin Stiben Narvaez
 * Martes 07 de Mayo del 2024
 */

 function salarioP($pdias,$pvdia){
    $dias=$pdias;
    $vdia=$pvdia;
    $totalSueldo;
    $totalSueldo=$dias*$vdia;
    return $totalSueldo;
}

function subTransporteP($pdias,$pvdia){
    $salarioMin=1600000;
    $salarioTrans=salarioP($pdias,$pvdia);
    $subTransporte;
    if($salarioTrans<=2*$salarioMin){
        $subTransporte=114000;
    }else{
        $subTransporte=0;
    }
    return $subTransporte;
}

function saludP($pdias,$pvdia){
    $pagoSalud;
    $pagoSalud=salarioP($pdias,$pvdia)*0.12;
    return $pagoSalud;
}

function pensionP($pdias,$pvdia){
    $pagoPension;
    $pagoPension=salarioP($pdias,$pvdia)*0.16;
    return $pagoPension;
}

function arlP($pdias,$pvdia){
    $pagoArl;
    $pagoArl=salarioP($pdias,$pvdia);
    return $pagoArl;
}

function deducibleP($pdias,$pvdia){
    $pagoDeducible;
    $pagoDeducible=saludP($pdias,$pvdia)+pensionP($pdias,$pvdia)+arlP($pdias,$pvdia);
    return $pagoDeducible;
}

function retencionP($pdias,$pvdia){
    $salarioReten=salarioP($pdias,$pvdia);
    $salarioMin=1600000;
    $retencionPago;
    if($salarioReten<=4*$salarioMin){
        $retencionPago=114000;
    }else{
        $retencionPago=0;
    }
    return $retencionPago;
}

function pagoTotal($pdias,$pvdia){
    $pagoSueldo;
    $pagoSueldo=deducibleP($pdias,$pvdia)-salarioP($pdias,$pvdia)+subTransporteP($pdias,$pvdia);
    return $pagoSueldo;
}
?>