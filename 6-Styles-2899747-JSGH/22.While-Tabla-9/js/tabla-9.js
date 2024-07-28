function mostrarTabla(n) {
    let i = 1;
    let tabla = "";
    while (i <= 5){
        if(i%2==0){
            tabla += `${n} x ${i} = ${n * i} par<br>`;
        }else{
            tabla += `${n} x ${i} = ${n * i} impar<br>`;
        }
        i++;
    }
    document.getElementById('n').innerHTML = "<strong>" + tabla + "</strong>";
}