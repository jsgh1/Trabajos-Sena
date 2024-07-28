/**
 * Funcion Promedio
 * Autor: Martin Stiben Narvaez
 * Martes 02 de Abril del 2024
 */

function promediar(pnota1,pnota2,pnota3){
    let promedio;
    let suma;
    let nota1 = pnota1;
    let nota2 = pnota2;
    let nota3 = pnota3;
    suma = nota1 + nota2 + nota3;
    promedio = suma / 3;
    return "El promedio de "+nota1+","+nota2+","+nota3+" es "+promedio;
}
const promediaExp=function(pnota1,pnota2,pnota3){
    let promedio,suma;
    let nota1=pnota1;
    let nota2=pnota2;
    let nota3=pnota3;
    suma=nota1+nota2+nota3;
    promedio=suma/3;
    return "El promedio de "+nota1+","+nota2+","+nota3+" es "+promedio;
}