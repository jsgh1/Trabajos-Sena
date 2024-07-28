/**
 * Funciones resta, multiplicacion y division - de dos numeros
 * Autor : Martin Stiben Narvaez
 * Martes 02 de Abril del 2024
 */

let numero1;
let numero2;

function resta(pnumero1,pnumero2){
   let restar;
   numero1=pnumero1;
   numero2=pnumero2;
   restar=numero1-numero2;
}

function multiplicacion(pnumero1,pnumero2){
   let multiplicar;
   numero1=pnumero1;
   numero2=pnumero2;
   multiplicar=numero1*numero2;
}

function division(pnumero1,pnumero2){
   let dividir;
   numero1=pnumero1;
   numero2=pnumero2;
   dividir=numero1-numero2;
}

function operaciones(poperacion,pnumero1,pnumero2){
   let operacion=poperacion;

   if(operacion=="resta"){
      return restar;
   }else if(operacion=="multiplicacion"){
      return multiplicar;
   }else if(operacion=="division"){
      return dividir;
   }
}

const restaExp=function(pnumero1,pnumero2){
   let restar;
   numero1=pnumero1;
   numero2=pnumero2;
   restar=numero1-numero2;
}

const multiplicacionExp=function(pnumero1,pnumero2){
   let multiplicar;
   numero1=pnumero1;
   numero2=pnumero2;
   multiplicar=numero1*numero2;
}

const divisionExp=function(pnumero1,pnumero2){
   let dividir;
   numero1=pnumero1;
   numero2=pnumero2;
   dividir=numero1-numero2;
}

const operacionesExp=function(poperacion,pnumero1,pnumero2){
   let operacion=poperacion;

   if(operacion=="resta"){
      return restar;
   }else if(operacion=="multiplicacion"){
      return multiplicar;
   }else if(operacion=="division"){
      return dividir;
   }
}
