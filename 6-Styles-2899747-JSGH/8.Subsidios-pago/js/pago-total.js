/**
Funcion de una nomina con el pago total y los subsidios (Salud, Pension, arl)
Martin Stiben Narvaez
Lunes 17 de Junio del 2024
*/


function salario(){
  let pagoDia;
  let dias;
  pagoDia = document.getElementById('txtpago').value;
  dias = document.getElementById('txtdias').value;
  let pagoTot = pagoDia * dias;
  let salud = pagoTot * 0.12;
  let pension = pagoTot * 0.16;
  let arl = pagoTot * 0.052;
  let descuento = salud + pension + arl;
  let pagoTotal = pagoTot - descuento;
  document.getElementById('salud').innerHTML = "<strong>"+ "Salud "+ salud + "</strong>";
  document.getElementById('pension').innerHTML = "<strong>"+ "Pension " + pension + "</strong>";
  document.getElementById('arl').innerHTML = "<strong>"+ "Arl " + arl + "</strong>";
  document.getElementById('pagoTotal').innerHTML = "<strong>"+ "Pago total " + pagoTotal + "</strong>";
}