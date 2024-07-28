let salarioMin = 1350000;

function pagoTotal() {
    let sueldo = parseFloat(document.getElementById('txtsueldo').value);
    let dias = parseFloat(document.getElementById('txtdias').value);
    return sueldo * dias;
}

function subTransporte() {
    let subTransporte = 130000;
    if (pagoTotal() > 2 * salarioMin) {
        return subTransporte;
    } else {
        return 0;
    }
}

function subsidios() {
    let totalPago = pagoTotal();
    let salud = totalPago * 0.12;
    let pension = totalPago * 0.16;
    let arl = totalPago * 0.052;
    return { salud, pension, arl, totalDescuento: salud + pension + arl };
}

function retencion() {
    let totalPago = pagoTotal();
    if (totalPago > 4 * salarioMin) {
        return totalPago * 0.04;
    } else {
        return 0;
    }
}

function salario() {
    let totalPago = pagoTotal();
    let subTrans = subTransporte();
    let subs = subsidios();
    let ret = retencion();
    let salarioFinal = totalPago + subTrans - subs.totalDescuento - ret;

    document.getElementById('salario').innerHTML = "<strong>Salario Total: $" + salarioFinal + "</strong>";
    document.getElementById('subTransporte').innerHTML = "<strong>Sub transporte: $" + subTrans + "</strong>";
    document.getElementById('retencion').innerHTML = "<strong>Retención: $" + ret + "</strong>";
    document.getElementById('salud').innerHTML = "<strong>Salud: $" + subs.salud + "</strong>";
    document.getElementById('pension').innerHTML = "<strong>Pensión: $" + subs.pension + "</strong>";
    document.getElementById('arl').innerHTML = "<strong>arl: $" + subs.arl + "</strong>";
}