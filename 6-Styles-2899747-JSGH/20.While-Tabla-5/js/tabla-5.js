function mostrarTabla(n) {
    let i = 1;
    let tabla = "";
    while (i <= 5){
        tabla += `${n} x ${i} = ${n * i}<br>`;
        i++;
    }
    document.getElementById('n').innerHTML = "<strong>" + tabla + "</strong>";
}