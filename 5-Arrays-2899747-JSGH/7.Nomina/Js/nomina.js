/**
 * Ejercicio de una nomina
 * Martin Stiben Narvaez
 * Martes 02 de Mayo del 2024
 */

let empleados=[];
let sumasTotal=[];
let salarioMin=1300000;
let subTransporte;

function salario(valorDia,diaTrabajo){
    let totalSalario = valorDia * diaTrabajo;
    return totalSalario;
}

function subTransporteP(valorDia,diaTrabajo){
    let salarioMin=1300000;
    let salarioTrans=salario(valorDia,diaTrabajo);
    let subTransporte;
    if(salarioTrans>2*salarioMin){
        subTransporte=120000;
        return subTransporte;
    }else{
        subTransporte=0;
        return subTransporte;
    }
}

function retencionP(valorDia,diaTrabajo){
    let salarioReten=salario(valorDia,diaTrabajo);
    let salarioMin=1300000;
    let retencionPago;
    if(salarioReten>12*salarioMin){
        retencionPago=salarioReten*0.08;
    }else if(salarioReten>8*salarioMin){
        retencionPago=salarioReten*0.04;
    }else if(salarioReten>6*salarioMin){
        retencionPago=salarioReten*0.02;
    }else{
        retencionPago=0;
    }
    return retencionPago;
}

function saludP(valorDia,diaTrabajo){
    let pagoSalud;
    pagoSalud=retencionP(valorDia,diaTrabajo)*0.12;
    return pagoSalud;
}

function pensionP(valorDia,diaTrabajo){
    let pagoPension;
    pagoPension=retencionP(valorDia,diaTrabajo)*0.16;
    return pagoPension;
}

function arlP(valorDia,diaTrabajo){
    let pagoArl;
    pagoArl=retencionP(valorDia,diaTrabajo)*0.052;
    return pagoArl;
}

function pagoTotalP(valorDia,diaTrabajo){
    let pagoTot;
    pagoTot=salario(valorDia,diaTrabajo)+subTransporteP(valorDia,diaTrabajo);
    return pagoTot;
}

empleados=[
    {id:32545450,nombres:'Alejandro',apellidos:'Montealegre',cargo:'Aseador',valorDia:120000,diaTrabajo:45},
    {id:32545450,nombres:'Alejandra',apellidos:'Hermosa',cargo:'Anesteciologa',valorDia:135000,diaTrabajo:36},
    {id:32545450,nombres:'Luiz Eduardo',apellidos:'Carreño',cargo:'Enfermera',valorDia:244000,diaTrabajo:35},
    {id:32545450,nombres:'Angela',apellidos:'Fierro',cargo:'Enfermera(jefe)',valorDia:320000,diaTrabajo:54},
    {id:32545450,nombres:'Diego Fernandes',apellidos:'Castro',cargo:'Enfermero',valorDia:430000,diaTrabajo:55},
    {id:32545450,nombres:'Lugo',apellidos:'Peña',cargo:'Cirujano Cardiovascular',valorDia:540000,diaTrabajo:23},
    {id:32545450,nombres:'Francisco',apellidos:'Sosa',cargo:'Cardiologo',valorDia:230000,diaTrabajo:47},
    {id:32545450,nombres:'Alejandro',apellidos:'Montealegre',cargo:'',valorDia:130000,diaTrabajo:57},
    {id:32545450,nombres:'Alejandro',apellidos:'Montealegre',cargo:'',valorDia:150000,diaTrabajo:70},
    {id:32545450,nombres:'Alejandro',apellidos:'Montealegre',cargo:'',valorDia:240000,diaTrabajo:64}
];

empleados.forEach((empleado) => {
    empleado.salario = salario(empleado.valorDia, empleado.diaTrabajo);
    empleado.subTransporte = subTransporteP(empleado.valorDia, empleado.diaTrabajo);
    empleado.retencion = retencionP(empleado.valorDia, empleado.diaTrabajo);
    empleado.salud = saludP(empleado.valorDia, empleado.diaTrabajo);
    empleado.pension = pensionP(empleado.valorDia, empleado.diaTrabajo);
    empleado.arl = arlP(empleado.valorDia, empleado.diaTrabajo);
    empleado.TotalAPagar = pagoTotalP(empleado.valorDia, empleado.diaTrabajo);
});

function sumarSalud(empleados) {
    let totalSalud = 0;
    empleados.forEach((empleado) => {
        totalSalud += empleado.salud;
    });
    return totalSalud;
}

function sumarPension(empleados) {
    let totalPension = 0;
    empleados.forEach((empleado) => {
        totalPension += empleado.pension;
    });
    return totalPension;
}

function sumarArl(empleados) {
    let totalArl = 0;
    empleados.forEach((empleado) => {
        totalArl += empleado.arl;
    });
    return totalArl;
}

function sumarRetencion(empleados) {
    let totalRetencion = 0;
    empleados.forEach((empleado) => {
        totalRetencion += empleado.retencion;
    });
    return totalRetencion;
}

function sumarPagoTotal(empleados) {
    let totalPagar = 0;
    empleados.forEach((empleado) => {
        totalPagar += empleado.TotalAPagar;
    });
    return totalPagar;
}

sumasTotal=[];

sumasTotal.push("Suma de la salud "+sumarSalud(empleados));
sumasTotal.push("Suma de la pension "+sumarPension(empleados));
sumasTotal.push("Suma de la arl "+sumarArl(empleados));
sumasTotal.push("Suma de todas las retenciones "+sumarRetencion(empleados));
sumasTotal.push("Total de la nomina "+sumarPagoTotal(empleados));

console.log(empleados);
console.log(sumasTotal);