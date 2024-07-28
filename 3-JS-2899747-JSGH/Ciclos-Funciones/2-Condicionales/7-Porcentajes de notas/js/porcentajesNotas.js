/**
 * Funcion de porcentaje de notas y cuel es su rango
 * Autor: Martin Stiben Narvaez
 * Sabado 13 de Abril del 2024
 */

function notas(pnota1,pnota2,pnota3){
    let nota1=pnota1;
    let nota2=pnota2;
    let nota3=pnota3;
    let porcentaje1,porcentaje2,porcentaje3,suma;
    porcentaje1=nota1*0.2;
    console.log("El porcentaje de la nota "+nota1+" es "+porcentaje1);
    porcentaje2=nota2*0.35;
    console.log("El porcentaje de la nota "+nota2+" es "+porcentaje2);
    porcentaje3=nota3*0.45;
    console.log("El porcentaje de la nota "+nota3+" es "+porcentaje3);
    suma=porcentaje1+porcentaje2+porcentaje3;
    console.log("La suma de los porcentajes de las notas es "+suma);

    if(suma>4.5){
        return "La nota es superior";
    }else if(suma>3.5){
        return "La nota es buena";
    }else if(suma>3){
        return "La nota es media";
    }else{
        return "La nota es mala";
    }
}

const notasExp=function(pnota1,pnota2,pnota3){
    let nota1=pnota1;
    let nota2=pnota2;
    let nota3=pnota3;
    let porcentaje1,porcentaje2,porcentaje3,suma;
    porcentaje1=nota1*0.2;
    console.log("El porcentaje de la nota "+nota1+" es "+porcentaje1);
    porcentaje2=nota2*0.35;
    console.log("El porcentaje de la nota "+nota2+" es "+porcentaje2);
    porcentaje3=nota3*0.45;
    console.log("El porcentaje de la nota "+nota3+" es "+porcentaje3);
    suma=porcentaje1+porcentaje2+porcentaje3;
    console.log("La suma de los porcentajes de las notas es "+suma);

    if(suma>4.5){
        return "La nota es superior";
    }else if(suma>3.5){
        return "La nota es buena";
    }else if(suma>3){
        return "La nota es media";
    }else{
        return "La nota es mala";
    }
}