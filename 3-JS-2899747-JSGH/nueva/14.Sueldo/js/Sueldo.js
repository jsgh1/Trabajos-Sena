/**
 * Funcion de sueldo de una persona
 * Martin Stiben Narvaez
 * Martes 02 de Abril del 2024
 */

function salarioP(pdias,pvdia){
    let dias=pdias;
    let vdia=pvdia;
    let totalSueldo;
    totalSueldo=dias*vdia;
    return totalSueldo;
}

function subTransporteP(pdias,pvdia){
    let salarioMin=1600000;
    let salarioTrans=salario(pdias,pvdia);
    let subTransporte;

    if(salarioTrans<=2*salarioMin){
        subTransporte=114000;
    }else{
        subTransporte=0;
    }
    return subTransporte;
}

function saludP(pdias,pvdia){
    let pagoSalud;
    pagoSalud=salario(pdias,pvdia)*0.12;
    return pagoSalud;
}

function pensionP(pdias,pvdia){
    let pagoPension;
    pagoPension=salario(pdias,pvdia)*0.16;
    return pagoPension;
}

function arlP(pdias,pvdia){
    let pagoArl;
    pagoArl=salario(pdias,pvdia);
    return pagoArl;
}

function deducibleP(pdias,pvdia){
    let pagoDeducible;
    pagoDeducible=saludP(pdias,pvdia)+pensionP(pdias,pvdia)+arlP(pdias,pvdia);
    return pagoDeducible;
}

function retencionP(pdias,pvdia){
    let salarioReten=salario(pdias,pvdia);
    let salarioMin=1600000;
    let retencionPago;

    if(salarioReten<=4*salarioMin){
        retencionPago=114000;
    }else{
        retencionPago=0;
    }
    return retencionPago;
}

function pagoTotal(pdias,pvdia){
    let pagoSueldo;
    pagoSueldo=salario(pdias,pvdia)+subTransporte(pdias,pvdia)-deducibleP(pdias,pvdia);
    return pagoSueldo;
}

const salario=function(pdias,pvdia){
    let dias=pdias;
    let vdia=pvdia;
    let totalSalario;
    totalSalario=dias*vdia;
    return totalSalario;
}

const subTransporte=function(pdias,pvdia){
    let salarioMin=1600000;
    let salarioTrans=salario(pdias,pvdia);
    let subTransporte;

    if(salarioTrans<=2*salarioMin){
        subTransporte=114000;
    }else{
        subTransporte=0;
    }
    return subTransporte;
}

const salud=function(pdias,pvdia){
    let pagoSalud;
    pagoSalud=salario(pdias,pvdia)*0.12;
    return pagoSalud;
}

const pension=function(pdias,pvdia){
    let pagoPension;
    pagoPension=salario(pdias,pvdia)*0.16;
    return pagoPension;
}

const arl=function(pdias,pvdia){
    let pagoArl;
    pagoArl=salario(pdias,pvdia)*0.052;
    return pagoArl;
}

const deducible=function(pdias,pvdia){
    let pagoDeducible;
    pagoDeducible=salud(pdias,pvdia)+pension(pdias,pvdia)+arl(pdias,pvdia);
    return pagoDeducible;
}

const retencion=function(pdias,pvdia){
    let salarioReten=salario(pdias,pvdia);
    let salarioMin=1600000;
    let retencionPago;

    if(salarioReten<=4*salarioMin){
        retencionPago=114000;
    }else{
        retencionPago=0;
    }
    return retencionPago;
}

const pagoTotalExp=function(pdias,pvdia){
    let pagoSueldo;
    pagoSueldo=salario(pdias,pvdia)+subTransporte(pdias,pvdia)-deducible(pdias,pvdia);
    return pagoSueldo;
}