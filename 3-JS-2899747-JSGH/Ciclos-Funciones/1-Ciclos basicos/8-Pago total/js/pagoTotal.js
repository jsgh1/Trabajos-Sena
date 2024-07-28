/**
 * Funcion de Pago total
 * Autor: Martin Stiben Narvaez
 * Viernes 04 de Abril del 2024
*/

function pagoTotal(psubsidios,pvalorDia,pdiasTrabajados){
    let subsidios = psubsidios;
    let diasTabajados = pdiasTrabajados;
    let valorDia = pvalorDia; 
    let salario = diasTabajados * valorDia;
    let salud,pension,arl,pagoTota,descuento;
    salud = salario*0.12;
    pension = salario*0.16;
    arl = salario*0.052;
    descuento = salud+pension+arl;
    pagoTota = salario - descuento;

    if (subsidios == "salud"){
        return salud;
    } else if(subsidios == "pension"){
        return pension;  
    } else if(subsidios == "arl"){
        return arl;
    } else if(subsidios == "Pagotot"){
        return pagoTota;
    }
}

const pagoTotalExp=function(psubsidios,pvalorDia,pdiasTrabajados){
    let subsidios = psubsidios;
    let diasTabajados = pdiasTrabajados;
    let valorDia = pvalorDia; 
    let salario = diasTabajados * valorDia;
    let salud,pension,arl,pagoTotal,descuento;
    salud = salario*0.12;
    pension = salario*0.16;
    arl = salario*0.052;
    descuento = salud+pension+arl;
    pagoTotal = salario - descuento;

    if (subsidios == "salud"){
        return salud;
    } else if(subsidios == "pension"){
        return pension;  
    } else if(subsidios == "arl"){
        return arl;
    } else if(subsidios == "Pagotot"){
        return pagoTotal;
    }
}