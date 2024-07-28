/**
 * Funcion de pago total
 * Martin Stiben Narvaez
 * Martes 02 de Abril del 2024
 */

function subsidios(psubsidio,pdias,pvdia){
    let subsidio=psubsidio;
    let dias=pdias;
    let vdia=pvdia;
    let salario,salud,pension,arl;
    salario=dias*vdia;
    if(subsidio=="salud"){
        salud=salario*0.12;
        return salud;
    }else if(subsidio=="pension"){
        pension=salario*0.16;
        return pension;
    }else if(subsidio=="arl"){
        arl=salario*0.052;
        return arl;
    }else{
        return "No hay mas subsidios";
    }
}

function pagoTotal(pdias,pvdia){
    let pagoTot;
    let deducible;
    let dias=pdias;
    let vdia=pvdia;
    let salario=dias*vdia;
    deducible=subsidios("salud",pdias,pvdia)+subsidios("pension",pdias,pvdia)+subsidios("arl",pdias,pvdia);
    pagoTot=salario-deducible;
    return pagoTot;
}


const subsidioExp=function(psubsidio,pdias,pvdia){
    let subsidio=psubsidio;
    let dias=pdias;
    let vdia=pvdia;
    let salario,salud,pension,arl;
    salario=dias*vdia;
    if(subsidio=="salud"){
        salud=salario*0.12;
        return salud;
    }else if(subsidio=="pension"){
        pension=salario*0.16;
        return pension;
    }else if(subsidio=="arl"){
        arl=salario*0.052;
        return arl;
    }else{
        return "No hay mas subsidios";
    }
}

const pagoTotalExp=function(pdias,pvdia){
    let pagoTot;
    let deducible;
    let dias=pdias;
    let vdia=pvdia;
    let salario=dias*vdia;
    deducible=subsidios("salud",pdias,pvdia)+subsidios("pension",pdias,pvdia)+subsidios("arl",pdias,pvdia);
    pagoTot=salario-deducible;
    return pagoTot;
}
