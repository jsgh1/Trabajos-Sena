function triangulo(pBase,pAltura){
    let base=pBase;
    let altura=pAltura;
    let operacion=base*altura/2
    return operacion;
}

function rectangulo(pBase,pAltura){
    let base=pBase;
    let altura=pAltura;
    let operacion=base*altura;
    return operacion;
}

function cuaderno(pPaginas,pBase,pAltura){
    let paginas=pPaginas;
    let base=pBase;
    let altura=pAltura;
    let operacion;
    let hojas=paginas/2;
    let espacio;
    operacion=base*altura;
    espacio=hojas*operacion;
    return espacio;
}

function perimetro(pLado1,pLado2,pLado3,pLado4){
    let lado1=pLado1;
    let lado2=pLado2;
    let lado3=pLado3;
    let lado4=pLado4;
    let ladoC,suma,perimetro,area,base;
    lado4=lado4*lado4;
    lado2=lado2*lado2;
    suma=lado4+lado2;
    console.log(suma);
    Math.sqrt(suma);
    console.log("El lado C es: "+suma+"m");
    perimetro=lado1+lado2+lado3+lado4+ladoC;
    console.log("El perimetro de el trapecion es: "+perimetro+"m");
    base=lado3+lado4;
    area=((base+lado1)*lado2/2);
    return area;
}